const services = [
  {
    id: "brand-refresh",
    category: "Brand",
    title: "Brand Refresh Sprint",
    description: "Identity cleanup, positioning pass, and practical brand toolkit.",
    kind: "one-time",
    price: 1500,
    days: 10,
  },
  {
    id: "visual-system",
    category: "Brand",
    title: "Visual System Upgrade",
    description: "Component-level visual language for product and marketing consistency.",
    kind: "one-time",
    price: 2200,
    days: 12,
  },
  {
    id: "landing-design",
    category: "Web",
    title: "Landing Direction + UX",
    description: "Narrative structure, wireframes, and high-fidelity interface design.",
    kind: "one-time",
    price: 1800,
    days: 8,
  },
  {
    id: "webflow-build",
    category: "Web",
    title: "Webflow Build + QA",
    description: "Responsive implementation, animation pass, and production QA.",
    kind: "one-time",
    price: 3200,
    days: 14,
  },
  {
    id: "cms-retainer",
    category: "Growth Ops",
    title: "CMS Growth Retainer",
    description: "Monthly experiments, content operations, and publishing support.",
    kind: "monthly",
    price: 950,
    days: 0,
  },
  {
    id: "analytics",
    category: "Growth Ops",
    title: "Analytics + Funnel Tracking",
    description: "Event map, dashboards, and conversion-grade instrumentation setup.",
    kind: "one-time",
    price: 1200,
    days: 5,
  },
  {
    id: "copy-system",
    category: "Content",
    title: "Conversion Copy System",
    description: "Core page messaging and modular copy blocks for rapid iteration.",
    kind: "one-time",
    price: 1400,
    days: 6,
  },
  {
    id: "investor-deck",
    category: "Content",
    title: "Investor Deck Narrative",
    description: "Fundraise-ready deck narrative and visual structure cleanup.",
    kind: "one-time",
    price: 1100,
    days: 4,
  },
];

const state = {
  category: "All",
  cart: {},
  lastBookedAt: null,
};

const categories = ["All", ...new Set(services.map((service) => service.category))];

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function formatMoney(value) {
  return `$${Number(value).toLocaleString("en-US")}`;
}

function formatMonthly(value) {
  return `${formatMoney(value)}/mo`;
}

function cartItems() {
  return Object.entries(state.cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ ...services.find((service) => service.id === id), qty }));
}

function filteredServices() {
  if (state.category === "All") {
    return services;
  }
  return services.filter((service) => service.category === state.category);
}

function computeTotals() {
  const items = cartItems();

  const oneTimeTotal = items
    .filter((item) => item.kind === "one-time")
    .reduce((sum, item) => sum + item.price * item.qty, 0);

  const monthlyTotal = items
    .filter((item) => item.kind === "monthly")
    .reduce((sum, item) => sum + item.price * item.qty, 0);

  const timelineTotal = items.reduce((sum, item) => sum + item.days * item.qty, 0);

  return {
    oneTimeTotal,
    monthlyTotal,
    timelineTotal,
    invoiceTotal: oneTimeTotal + monthlyTotal,
    items,
  };
}

function nextBuildId() {
  const seed = Date.now().toString().slice(-5);
  return `SK-BLD-${seed}`;
}

function renderCategoryFilters() {
  const root = qs("#categoryFilters");
  root.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip ${state.category === category ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state.category = category;
      renderAll();
    });
    root.appendChild(button);
  });
}

function renderServices() {
  const root = qs("#serviceGrid");
  root.innerHTML = "";

  filteredServices().forEach((service) => {
    const quantity = state.cart[service.id] || 0;

    const card = document.createElement("article");
    card.className = "service-card";

    const cadence = service.kind === "monthly" ? formatMonthly(service.price) : formatMoney(service.price);

    card.innerHTML = `
      <p class="service-category">${service.category}</p>
      <h3>${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <div class="service-meta">
        <span>${cadence}</span>
        <span>${service.days ? `${service.days} days` : "recurring"}</span>
      </div>
      <div class="service-actions">
        <button type="button" data-remove="${service.id}" ${quantity === 0 ? "disabled" : ""}>-</button>
        <span>${quantity}</span>
        <button type="button" data-add="${service.id}">+</button>
      </div>
    `;

    root.appendChild(card);
  });

  qsa("button[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-add");
      state.cart[id] = (state.cart[id] || 0) + 1;
      renderAll();
    });
  });

  qsa("button[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-remove");
      state.cart[id] = Math.max((state.cart[id] || 0) - 1, 0);
      renderAll();
    });
  });
}

function renderSelected() {
  const root = qs("#selectedList");
  const { items } = computeTotals();

  if (!items.length) {
    root.innerHTML = `
      <p class="empty">No services added yet. Add from the catalog to start your build card.</p>
    `;
    return;
  }

  root.innerHTML = "";

  items.forEach((item) => {
    const row = document.createElement("article");
    row.className = "selected-item";
    row.innerHTML = `
      <div>
        <h4>${item.title}</h4>
        <p>${item.qty} x ${item.kind === "monthly" ? formatMonthly(item.price) : formatMoney(item.price)}</p>
      </div>
      <strong>${item.kind === "monthly" ? formatMonthly(item.price * item.qty) : formatMoney(item.price * item.qty)}</strong>
    `;
    root.appendChild(row);
  });
}

function renderTotals() {
  const { oneTimeTotal, monthlyTotal, timelineTotal, invoiceTotal } = computeTotals();
  qs("#oneTimeTotal").textContent = formatMoney(oneTimeTotal);
  qs("#monthlyTotal").textContent = formatMonthly(monthlyTotal);
  qs("#timelineTotal").textContent = `${timelineTotal || 0} days`;
  qs("#invoiceTotal").textContent = formatMoney(invoiceTotal);

  const button = qs("#bookCallBtn");
  button.disabled = invoiceTotal === 0;
}

function renderPayload() {
  const { items, oneTimeTotal, monthlyTotal, timelineTotal, invoiceTotal } = computeTotals();

  const payload = {
    buildId: qs("#buildId").textContent.replace("Build ID: ", ""),
    source: "spacekayak-storefront",
    selectedItems: items.map((item) => ({
      id: item.id,
      title: item.title,
      quantity: item.qty,
      category: item.category,
      pricingModel: item.kind,
      unitPrice: item.price,
      timelineDays: item.days,
    })),
    totals: {
      oneTime: oneTimeTotal,
      monthly: monthlyTotal,
      estimatedTimelineDays: timelineTotal,
      projectedFirstInvoice: invoiceTotal,
    },
    status: state.lastBookedAt ? "call-booked" : "draft",
  };

  qs("#backendPayload").textContent = JSON.stringify(payload, null, 2);
}

function openModal() {
  qs("#bookingModal").classList.remove("hidden");
}

function closeModal() {
  qs("#bookingModal").classList.add("hidden");
}

function bindCoreEvents() {
  qs("#bookCallBtn").addEventListener("click", openModal);
  qs("#closeModalBtn").addEventListener("click", closeModal);
  qs("#clearBtn").addEventListener("click", () => {
    state.cart = {};
    state.lastBookedAt = null;
    qs("#buildId").textContent = `Build ID: ${nextBuildId()}`;
    renderAll();
  });

  qs("#bookingModal").addEventListener("click", (event) => {
    if (event.target.id === "bookingModal") {
      closeModal();
    }
  });

  qs("#bookingForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const date = formData.get("date");
    const time = formData.get("time");

    state.lastBookedAt = new Date().toISOString();

    const success = qs("#bookingSuccess");
    success.classList.remove("hidden");
    success.textContent = `Call requested for ${name} (${company}) on ${date} at ${time}. Build card + estimate is attached for ${email}.`;

    event.target.reset();
    renderPayload();
  });
}

function renderAll() {
  renderCategoryFilters();
  renderServices();
  renderSelected();
  renderTotals();
  renderPayload();
}

function init() {
  qs("#buildId").textContent = `Build ID: ${nextBuildId()}`;
  bindCoreEvents();
  renderAll();
}

init();
