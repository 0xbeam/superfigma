const appState = {
  mode: "story",
  activeScreen: "overview",
  tier: "lean",
  discountPct: 0,
  paymentTerms: "50-50",
  addons: {
    cmsTraining: false,
    conversionCopy: false,
    analyticsSetup: false,
    designSystem: false,
  },
};

const tierConfig = {
  lean: { costMultiplier: 1.0, dayMultiplier: 1.0 },
  standard: { costMultiplier: 1.18, dayMultiplier: 1.2 },
  extended: { costMultiplier: 1.42, dayMultiplier: 1.45 },
};

const baseLineItems = [
  { name: "Brand Elevation", amount: 1500 },
  { name: "Web Design and Direction", amount: 1500 },
  { name: "Webflow Development", amount: 3000 },
];

const addonDefinitions = {
  cmsTraining: { label: "CMS Team Training", cost: 450, days: 2 },
  conversionCopy: { label: "Conversion Copywriting", cost: 800, days: 4 },
  analyticsSetup: { label: "Analytics + Events Setup", cost: 600, days: 2 },
  designSystem: { label: "Reusable UI Design System", cost: 1200, days: 6 },
};

const baseMilestones = [
  { name: "Discovery and Kickoff", days: 3 },
  { name: "Brand Elevation", days: 21 },
  { name: "Web IA and Visuals", days: 10 },
  { name: "Webflow Build and QA", days: 12 },
  { name: "Handoff", days: 2 },
];

function qs(sel) {
  return document.querySelector(sel);
}

function qsa(sel) {
  return Array.from(document.querySelectorAll(sel));
}

function formatMoney(amount) {
  return `$${amount.toLocaleString()}`;
}

function round(value) {
  return Math.round(value);
}

function selectedAddons() {
  return Object.entries(appState.addons)
    .filter(([, enabled]) => enabled)
    .map(([key]) => ({ key, ...addonDefinitions[key] }));
}

function recalc() {
  const tier = tierConfig[appState.tier];
  const addons = selectedAddons();

  const lineItems = baseLineItems.map((item) => ({
    ...item,
    adjusted: round(item.amount * tier.costMultiplier),
  }));

  const addonItems = addons.map((addon) => ({
    name: addon.label,
    adjusted: addon.cost,
  }));

  const subtotal = lineItems.reduce((sum, item) => sum + item.adjusted, 0) + addonItems.reduce((sum, item) => sum + item.adjusted, 0);
  const discount = round((subtotal * appState.discountPct) / 100);
  const total = subtotal - discount;

  const baseDays = baseMilestones.reduce((sum, m) => sum + m.days, 0);
  const tierDays = round(baseDays * tier.dayMultiplier);
  const addonDays = addons.reduce((sum, addon) => sum + addon.days, 0);
  const totalDays = tierDays + addonDays;

  return {
    lineItems,
    addonItems,
    subtotal,
    discount,
    total,
    totalDays,
    addons,
  };
}

function renderAddons() {
  const grid = qs("#addonGrid");
  grid.innerHTML = "";

  Object.entries(addonDefinitions).forEach(([key, addon]) => {
    const checked = appState.addons[key] ? "checked" : "";
    const node = document.createElement("article");
    node.className = "addon-item";
    node.innerHTML = `
      <label>
        <input type="checkbox" data-addon-key="${key}" ${checked} /> ${addon.label}
      </label>
      <p class="addon-meta">+${formatMoney(addon.cost)} and +${addon.days} days</p>
    `;
    grid.appendChild(node);
  });

  qsa("input[data-addon-key]").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const key = event.target.getAttribute("data-addon-key");
      appState.addons[key] = event.target.checked;
      renderAll();
    });
  });
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function fmtDate(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function renderTimeline(result) {
  const tbody = qs("#timelineTable tbody");
  tbody.innerHTML = "";

  const today = new Date();
  let cursor = today;

  const tier = tierConfig[appState.tier];

  baseMilestones.forEach((milestone) => {
    const duration = round(milestone.days * tier.dayMultiplier);
    const start = cursor;
    const end = addDays(start, duration);
    cursor = end;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${milestone.name}</td>
      <td>${fmtDate(start)}</td>
      <td>${duration}</td>
      <td>${fmtDate(end)}</td>
    `;
    tbody.appendChild(row);
  });

  if (result.addons.length) {
    result.addons.forEach((addon) => {
      const start = cursor;
      const end = addDays(start, addon.days);
      cursor = end;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${addon.label}</td>
        <td>${fmtDate(start)}</td>
        <td>${addon.days}</td>
        <td>${fmtDate(end)}</td>
      `;
      tbody.appendChild(row);
    });
  }
}

function renderCommercials(result) {
  const tbody = qs("#commercialTable tbody");
  tbody.innerHTML = "";

  [...result.lineItems, ...result.addonItems].forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${formatMoney(item.adjusted)}</td>
    `;
    tbody.appendChild(row);
  });

  qs("#subtotalCell").textContent = formatMoney(result.subtotal);
  qs("#discountCell").textContent = `-${formatMoney(result.discount)}`;
  qs("#totalCell").textContent = formatMoney(result.total);
}

function renderSummary(result) {
  qs("#summaryBudget").textContent = formatMoney(result.total);
  qs("#overviewBudget").textContent = formatMoney(result.total);
  qs("#summaryDuration").textContent = `${result.totalDays} days`;
  qs("#overviewDuration").textContent = `${result.totalDays} days`;
  qs("#summaryScopeCount").textContent = `${baseLineItems.length + result.addonItems.length + 4} selected`;
  qs("#summaryTier").textContent = appState.tier.charAt(0).toUpperCase() + appState.tier.slice(1);

  const termsMap = {
    "50-50": "50% / 50%",
    "40-40-20": "40% / 40% / 20%",
    monthly: "Monthly",
  };
  qs("#summaryTerms").textContent = termsMap[appState.paymentTerms];

  const chips = qs("#impactChips");
  chips.innerHTML = "";

  const chipData = [
    { cls: "cost", text: `Tier: ${qs("#summaryTier").textContent}` },
    { cls: "time", text: `${result.totalDays} day timeline` },
    { cls: "cost", text: `${result.addons.length} add-on${result.addons.length === 1 ? "" : "s"}` },
  ];

  chipData.forEach((chip) => {
    const node = document.createElement("span");
    node.className = `chip ${chip.cls}`;
    node.textContent = chip.text;
    chips.appendChild(node);
  });
}

function renderMode() {
  const storyBtn = qs("#storyModeBtn");
  const builderBtn = qs("#builderModeBtn");

  storyBtn.classList.toggle("active", appState.mode === "story");
  builderBtn.classList.toggle("active", appState.mode === "builder");

  const status = qs("#proposalStatus");
  if (appState.mode === "builder") {
    status.textContent = "Negotiation";
    status.style.color = "#ffd37d";
  } else {
    status.textContent = "Sent";
    status.style.color = "#2cb67d";
  }
}

function renderScreen() {
  qsa(".screen").forEach((screen) => {
    const active = screen.getAttribute("data-screen") === appState.activeScreen;
    screen.classList.toggle("active", active);
  });

  qsa(".nav-link").forEach((btn) => {
    const active = btn.getAttribute("data-screen") === appState.activeScreen;
    btn.classList.toggle("active", active);
  });
}

function renderAll() {
  const result = recalc();
  renderMode();
  renderScreen();
  renderAddons();
  renderTimeline(result);
  renderCommercials(result);
  renderSummary(result);
}

function bindEvents() {
  qs("#storyModeBtn").addEventListener("click", () => {
    appState.mode = "story";
    renderAll();
  });

  qs("#builderModeBtn").addEventListener("click", () => {
    appState.mode = "builder";
    renderAll();
  });

  qsa(".nav-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      appState.activeScreen = btn.getAttribute("data-screen");
      renderAll();
    });
  });

  qsa(".tier-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      appState.tier = btn.getAttribute("data-tier");
      qsa(".tier-btn").forEach((candidate) => {
        candidate.classList.toggle("active", candidate === btn);
      });
      renderAll();
    });
  });

  qs("#discountInput").addEventListener("input", (event) => {
    appState.discountPct = Number(event.target.value);
    qs("#discountLabel").textContent = `${appState.discountPct}%`;
    renderAll();
  });

  qs("#paymentTerms").addEventListener("change", (event) => {
    appState.paymentTerms = event.target.value;
    renderAll();
  });
}

bindEvents();
renderAll();
