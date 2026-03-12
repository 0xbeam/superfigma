figma.showUI(__html__, { width: 520, height: 700 });

function rgbToHex(c) {
  function toHex(v) {
    return Math.round(v * 255).toString(16).padStart(2, "0");
  }
  return "#" + toHex(c.r) + toHex(c.g) + toHex(c.b);
}

function shallowMerge(base, extra) {
  var out = {};
  var k;
  for (k in base) {
    if (Object.prototype.hasOwnProperty.call(base, k)) out[k] = base[k];
  }
  for (k in extra) {
    if (Object.prototype.hasOwnProperty.call(extra, k)) out[k] = extra[k];
  }
  return out;
}

function hasFn(obj, name) {
  return !!obj && typeof obj[name] === "function";
}

function getLocalOrEmpty(name) {
  if (!hasFn(figma, name)) return [];
  try {
    return figma[name]();
  } catch (e) {
    return [];
  }
}

function normalizeVariableValue(value) {
  if (value == null) return null;
  if (typeof value === "object") {
    if (value.type === "VARIABLE_ALIAS") {
      return { type: "alias", id: value.id };
    }
    if ("r" in value && "g" in value && "b" in value) {
      return {
        type: "color",
        color: rgbToHex(value),
        opacity: value.a == null ? 1 : value.a
      };
    }
  }
  return value;
}

function paintToToken(paint) {
  if (!paint) return null;

  if (paint.type === "SOLID") {
    return {
      type: "solid",
      color: rgbToHex(paint.color),
      opacity: paint.opacity == null ? 1 : paint.opacity
    };
  }

  if (
    paint.type === "GRADIENT_LINEAR" ||
    paint.type === "GRADIENT_RADIAL" ||
    paint.type === "GRADIENT_ANGULAR" ||
    paint.type === "GRADIENT_DIAMOND"
  ) {
    var stops = [];
    var gs = paint.gradientStops || [];
    for (var i = 0; i < gs.length; i++) {
      var s = gs[i];
      stops.push({
        position: s.position,
        color: rgbToHex(s.color),
        opacity: s.color.a == null ? 1 : s.color.a
      });
    }

    return {
      type: String(paint.type).toLowerCase(),
      stops: stops
    };
  }

  if (paint.type === "IMAGE") {
    return {
      type: "image",
      scaleMode: paint.scaleMode || null,
      imageHash: paint.imageHash || null,
      opacity: paint.opacity == null ? 1 : paint.opacity
    };
  }

  return { type: String(paint.type).toLowerCase() };
}

function effectToToken(effect) {
  if (!effect) return null;

  if (effect.type === "DROP_SHADOW" || effect.type === "INNER_SHADOW") {
    return {
      type: String(effect.type).toLowerCase(),
      color: rgbToHex(effect.color),
      alpha: effect.color.a,
      offset: effect.offset,
      radius: effect.radius,
      spread: effect.spread,
      visible: effect.visible
    };
  }

  if (effect.type === "LAYER_BLUR" || effect.type === "BACKGROUND_BLUR") {
    return {
      type: String(effect.type).toLowerCase(),
      radius: effect.radius,
      visible: effect.visible
    };
  }

  return {
    type: String(effect.type).toLowerCase(),
    visible: effect.visible
  };
}

function styleSummary(style) {
  return {
    id: style.id,
    key: style.key,
    name: style.name,
    description: style.description || "",
    remote: !!style.remote
  };
}

function getNodePageId(node) {
  var current = node;
  while (current && current.type !== "PAGE") {
    current = current.parent;
  }
  return current ? current.id : null;
}

function toPageSet(selectedPageIds) {
  if (!selectedPageIds || selectedPageIds.length === 0) return null;
  return new Set(selectedPageIds);
}

async function exportVariables() {
  if (!figma.variables || !figma.variables.getLocalVariableCollectionsAsync) {
    return {
      supported: false,
      collections: [],
      variables: []
    };
  }

  var collections = await figma.variables.getLocalVariableCollectionsAsync();
  var variableMap = new Map();
  var collectionData = [];

  for (var c = 0; c < collections.length; c++) {
    var col = collections[c];
    var variableIds = Array.from(col.variableIds || []);

    var colModes = [];
    for (var m = 0; m < col.modes.length; m++) {
      colModes.push({ modeId: col.modes[m].modeId, name: col.modes[m].name });
    }

    collectionData.push({
      id: col.id,
      key: col.key,
      name: col.name,
      defaultModeId: col.defaultModeId,
      modes: colModes,
      variableIds: variableIds
    });

    for (var vidx = 0; vidx < variableIds.length; vidx++) {
      var id = variableIds[vidx];
      if (variableMap.has(id)) continue;

      var v = await figma.variables.getVariableByIdAsync(id);
      if (!v) continue;

      var valuesByMode = {};
      var modeKeys = Object.keys(v.valuesByMode || {});
      for (var mk = 0; mk < modeKeys.length; mk++) {
        var modeId = modeKeys[mk];
        valuesByMode[modeId] = normalizeVariableValue(v.valuesByMode[modeId]);
      }

      variableMap.set(id, {
        id: v.id,
        key: v.key,
        name: v.name,
        description: v.description || "",
        resolvedType: v.resolvedType,
        remote: !!v.remote,
        valuesByMode: valuesByMode
      });
    }
  }

  return {
    supported: true,
    collections: collectionData,
    variables: Array.from(variableMap.values())
  };
}

function exportStyles() {
  var localPaintStyles = getLocalOrEmpty("getLocalPaintStyles");
  var paintStyles = [];

  for (var i = 0; i < localPaintStyles.length; i++) {
    var ps = localPaintStyles[i];
    var paints = ps.paints || [];
    var tokenPaints = [];

    for (var p = 0; p < paints.length; p++) {
      tokenPaints.push(paintToToken(paints[p]));
    }

    paintStyles.push(shallowMerge(styleSummary(ps), { paints: tokenPaints }));
  }

  var localTextStyles = getLocalOrEmpty("getLocalTextStyles");
  var textStyles = [];

  for (var t = 0; t < localTextStyles.length; t++) {
    var ts = localTextStyles[t];
    textStyles.push(
      shallowMerge(styleSummary(ts), {
        fontName: ts.fontName,
        fontSize: ts.fontSize,
        lineHeight: ts.lineHeight,
        letterSpacing: ts.letterSpacing,
        textCase: ts.textCase,
        textDecoration: ts.textDecoration,
        paragraphSpacing: ts.paragraphSpacing
      })
    );
  }

  var localEffectStyles = getLocalOrEmpty("getLocalEffectStyles");
  var effectStyles = [];

  for (var e = 0; e < localEffectStyles.length; e++) {
    var es = localEffectStyles[e];
    var effects = es.effects || [];
    var tokenEffects = [];
    for (var ei = 0; ei < effects.length; ei++) {
      tokenEffects.push(effectToToken(effects[ei]));
    }
    effectStyles.push(shallowMerge(styleSummary(es), { effects: tokenEffects }));
  }

  var localGridStyles = getLocalOrEmpty("getLocalGridStyles");
  var gridStyles = [];

  for (var g = 0; g < localGridStyles.length; g++) {
    var gs = localGridStyles[g];
    var grids = gs.layoutGrids || [];
    var tokenGrids = [];

    for (var gi = 0; gi < grids.length; gi++) {
      var lg = grids[gi];
      tokenGrids.push({
        pattern: lg.pattern,
        sectionSize: lg.sectionSize,
        visible: lg.visible,
        color: rgbToHex(lg.color),
        alpha: lg.color.a,
        alignment: lg.alignment,
        gutterSize: lg.gutterSize,
        offset: lg.offset,
        count: lg.count
      });
    }

    gridStyles.push(shallowMerge(styleSummary(gs), { layoutGrids: tokenGrids }));
  }

  return {
    paintStyles: paintStyles,
    textStyles: textStyles,
    effectStyles: effectStyles,
    gridStyles: gridStyles
  };
}

function exportComponents(selectedPageIds) {
  var pageSet = toPageSet(selectedPageIds);
  function includeNode(node) {
    if (!pageSet) return true;
    return pageSet.has(getNodePageId(node));
  }

  var localComponents = getLocalOrEmpty("getLocalComponents");
  var components = [];

  for (var i = 0; i < localComponents.length; i++) {
    var c = localComponents[i];
    if (!includeNode(c)) continue;

    components.push({
      id: c.id,
      key: c.key,
      name: c.name,
      description: c.description || "",
      remote: !!c.remote,
      pageId: getNodePageId(c),
      componentSetId:
        c.parent && c.parent.type === "COMPONENT_SET" ? c.parent.id : null,
      variantProperties: c.variantProperties || {},
      componentPropertyDefinitions: c.componentPropertyDefinitions || {}
    });
  }

  var localSets = getLocalOrEmpty("getLocalComponentSets");
  var componentSets = [];

  for (var s = 0; s < localSets.length; s++) {
    var setNode = localSets[s];
    if (!includeNode(setNode)) continue;

    var variants = [];
    for (var ch = 0; ch < setNode.children.length; ch++) {
      var child = setNode.children[ch];
      if (child.type !== "COMPONENT") continue;
      variants.push({
        id: child.id,
        name: child.name,
        key: child.key,
        variantProperties: child.variantProperties || {}
      });
    }

    componentSets.push({
      id: setNode.id,
      key: setNode.key,
      name: setNode.name,
      description: setNode.description || "",
      remote: !!setNode.remote,
      pageId: getNodePageId(setNode),
      componentPropertyDefinitions: setNode.componentPropertyDefinitions || {},
      variantGroupProperties: setNode.variantGroupProperties || {},
      variants: variants
    });
  }

  return {
    components: components,
    componentSets: componentSets
  };
}

function exportSelectionHint(selectedPageIds) {
  var pageSet = toPageSet(selectedPageIds);
  var selection = figma.currentPage.selection || [];
  var filtered = [];

  for (var i = 0; i < selection.length; i++) {
    if (!pageSet || pageSet.has(getNodePageId(selection[i]))) {
      filtered.push(selection[i]);
    }
  }

  var selectedNodes = [];
  for (var j = 0; j < filtered.length; j++) {
    selectedNodes.push({
      id: filtered[j].id,
      name: filtered[j].name,
      type: filtered[j].type
    });
  }

  return {
    selectedCount: filtered.length,
    selectedNodes: selectedNodes
  };
}

function getPages() {
  var pages = [];
  for (var i = 0; i < figma.root.children.length; i++) {
    var p = figma.root.children[i];
    pages.push({
      id: p.id,
      name: p.name,
      current: figma.currentPage.id === p.id
    });
  }
  return pages;
}

function exportPageInventory(selectedPageIds) {
  var pages = [];
  for (var i = 0; i < figma.root.children.length; i++) {
    var p = figma.root.children[i];
    if (!selectedPageIds || selectedPageIds.length === 0 || selectedPageIds.indexOf(p.id) !== -1) {
      pages.push(p);
    }
  }

  var out = [];

  for (var pg = 0; pg < pages.length; pg++) {
    var page = pages[pg];
    var allNodes = [];
    if (hasFn(page, "findAll")) {
      allNodes = page.findAll(function () { return true; });
    } else {
      var stack = Array.from(page.children || []);
      while (stack.length) {
        var next = stack.pop();
        allNodes.push(next);
        if (next && next.children && next.children.length) {
          for (var si = 0; si < next.children.length; si++) stack.push(next.children[si]);
        }
      }
    }
    var typeCounts = {};

    for (var n = 0; n < allNodes.length; n++) {
      var t = allNodes[n].type;
      typeCounts[t] = (typeCounts[t] || 0) + 1;
    }

    var topFrames = [];
    for (var c = 0; c < page.children.length; c++) {
      var node = page.children[c];
      if (node.type === "FRAME" || node.type === "SECTION" || node.type === "COMPONENT_SET") {
        topFrames.push({
          id: node.id,
          name: node.name,
          type: node.type,
          width: node.width,
          height: node.height
        });
      }
      if (topFrames.length >= 50) break;
    }

    out.push({
      id: page.id,
      name: page.name,
      totalNodes: allNodes.length,
      typeCounts: typeCounts,
      topFrames: topFrames
    });
  }

  return out;
}

function fontToString(fontName) {
  if (!fontName) return "UNKNOWN";
  if (typeof fontName === "symbol") return String(fontName);
  if (fontName === figma.mixed) return "MIXED";
  if (typeof fontName === "object") {
    return String(fontName.family) + ":" + String(fontName.style);
  }
  return String(fontName);
}

function metricToString(metric) {
  if (!metric) return "AUTO";
  if (metric === figma.mixed) return "MIXED";
  if (typeof metric === "number") return String(metric);
  if (typeof metric === "object") {
    if ("value" in metric) {
      return String(metric.value) + (metric.unit ? " " + String(metric.unit) : "");
    }
    try {
      return JSON.stringify(metric);
    } catch (e) {
      return String(metric);
    }
  }
  return String(metric);
}

function buildTypeSystem(styles, variables) {
  var familiesSet = new Set();
  var fontSizesSet = new Set();
  var lineHeightsSet = new Set();
  var letterSpacingsSet = new Set();

  var textStyleCatalog = [];

  for (var i = 0; i < styles.textStyles.length; i++) {
    var s = styles.textStyles[i];
    var family = fontToString(s.fontName);
    var lineHeight = metricToString(s.lineHeight);
    var letterSpacing = metricToString(s.letterSpacing);

    familiesSet.add(family);
    if (typeof s.fontSize === "number") fontSizesSet.add(s.fontSize);
    lineHeightsSet.add(lineHeight);
    letterSpacingsSet.add(letterSpacing);

    textStyleCatalog.push({
      name: s.name,
      family: family,
      size: s.fontSize,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
      textCase: s.textCase,
      textDecoration: s.textDecoration
    });
  }

  var tokenHints = [];
  for (var v = 0; v < variables.variables.length; v++) {
    var variable = variables.variables[v];
    var n = String(variable.name || "").toLowerCase();
    if (
      n.indexOf("font") !== -1 ||
      n.indexOf("fontsize") !== -1 ||
      n.indexOf("lineheight") !== -1 ||
      n.indexOf("letterspacing") !== -1 ||
      n.indexOf("typography") !== -1
    ) {
      tokenHints.push(variable);
    }
  }

  var families = Array.from(familiesSet);
  families.sort();
  var fontSizes = Array.from(fontSizesSet);
  fontSizes.sort(function (a, b) { return a - b; });
  var lineHeights = Array.from(lineHeightsSet);
  lineHeights.sort();
  var letterSpacings = Array.from(letterSpacingsSet);
  letterSpacings.sort();

  return {
    families: families,
    fontSizes: fontSizes,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    textStyleCatalog: textStyleCatalog,
    tokenHints: tokenHints
  };
}

function buildColorSystem(styles, variables) {
  var paletteMap = new Map();
  var styleColors = [];
  var gradients = [];

  for (var i = 0; i < styles.paintStyles.length; i++) {
    var style = styles.paintStyles[i];
    var paints = style.paints || [];

    for (var p = 0; p < paints.length; p++) {
      var paint = paints[p];
      if (!paint) continue;

      if (paint.type === "solid") {
        var key = String(paint.color) + "|" + String(paint.opacity);
        if (!paletteMap.has(key)) {
          paletteMap.set(key, {
            color: paint.color,
            opacity: paint.opacity,
            sources: []
          });
        }
        paletteMap.get(key).sources.push(style.name);

        styleColors.push({
          style: style.name,
          type: paint.type,
          color: paint.color,
          opacity: paint.opacity
        });
      } else if (String(paint.type).indexOf("gradient_") === 0) {
        gradients.push({
          style: style.name,
          type: paint.type,
          stops: paint.stops || []
        });
      }
    }
  }

  var variableColors = [];
  for (var v = 0; v < variables.variables.length; v++) {
    var variable = variables.variables[v];
    if (variable.resolvedType !== "COLOR") continue;
    variableColors.push({
      id: variable.id,
      name: variable.name,
      valuesByMode: variable.valuesByMode
    });
  }

  var semanticGroups = {};
  for (var vc = 0; vc < variableColors.length; vc++) {
    var colorVar = variableColors[vc];
    var name = String(colorVar.name || "");
    var root = name.indexOf("/") !== -1 ? name.split("/")[0] : "ungrouped";
    if (!semanticGroups[root]) semanticGroups[root] = [];
    semanticGroups[root].push(name);
  }

  var palette = Array.from(paletteMap.values());
  palette.sort(function (a, b) {
    return String(a.color).localeCompare(String(b.color));
  });

  return {
    palette: palette,
    styleColors: styleColors,
    gradients: gradients,
    variableColors: variableColors,
    semanticGroups: semanticGroups
  };
}

async function generateExport(options) {
  var stage = "init";
  try {
    var selectedPageIds = [figma.currentPage.id];
    if (options && Array.isArray(options.selectedPageIds) && options.selectedPageIds.length > 0) {
      selectedPageIds = options.selectedPageIds;
    }

    stage = "pages";
    var pages = getPages();
    var pageScope = [];
    for (var i = 0; i < pages.length; i++) {
      if (selectedPageIds.indexOf(pages[i].id) !== -1) {
        pageScope.push(pages[i]);
      }
    }

    stage = "variables";
    var variables = await exportVariables();
    stage = "styles";
    var styles = exportStyles();
    stage = "components";
    var components = exportComponents(selectedPageIds);
    stage = "selection";
    var selection = exportSelectionHint(selectedPageIds);
    stage = "inventory";
    var pageInventory = exportPageInventory(selectedPageIds);
    stage = "typeSystem";
    var typeSystem = buildTypeSystem(styles, variables);
    stage = "colorSystem";
    var colorSystem = buildColorSystem(styles, variables);

    var payload = {
      meta: {
        plugin: "Codex Design System Export",
        version: "1.1.2",
        exportedAt: new Date().toISOString(),
        file: {
          key: figma.fileKey || null,
          name: figma.root.name
        },
        scope: {
          selectedPageIds: selectedPageIds,
          selectedPages: pageScope
        }
      },
      summary: {
        selectedPages: pageScope.length,
        variableCollections: variables.collections.length,
        variables: variables.variables.length,
        paintStyles: styles.paintStyles.length,
        textStyles: styles.textStyles.length,
        effectStyles: styles.effectStyles.length,
        gridStyles: styles.gridStyles.length,
        components: components.components.length,
        componentSets: components.componentSets.length,
        paletteColors: colorSystem.palette.length,
        typeFamilies: typeSystem.families.length
      },
      pageInventory: pageInventory,
      selection: selection,
      variables: variables,
      styles: styles,
      components: components,
      typeSystem: typeSystem,
      colorSystem: colorSystem,
      codexPromptHint:
        "Use this JSON as source-of-truth for page scope, tokens, type system, and color system. Prefer these values over inferred values."
    };

    return payload;
  } catch (err) {
    var message = err instanceof Error ? err.message : String(err);
    throw new Error("generateExport stage " + stage + ": " + message);
  }
}

function postPageList() {
  figma.ui.postMessage({
    type: "pages",
    pages: getPages()
  });
}

postPageList();

figma.ui.onmessage = async function (msg) {
  if (msg.type === "request-pages") {
    postPageList();
    return;
  }

  if (msg.type === "export") {
    var stage = "export";
    try {
      stage = "generateExport";
      var payload = await generateExport(msg.options || {});
      stage = "postMessage";
      figma.ui.postMessage({
        type: "export-result",
        ok: true,
        json: JSON.stringify(payload, null, 2),
        summary: payload.summary
      });
    } catch (err) {
      var message = err instanceof Error ? err.message : String(err);
      var stack = err && err.stack ? String(err.stack) : "";
      figma.ui.postMessage({
        type: "export-result",
        ok: false,
        error: "Stage: " + stage + " | " + message + (stack ? "\\n" + stack : "")
      });
    }
    return;
  }

  if (msg.type === "close") {
    figma.closePlugin();
  }
};
