const tracking = {
  fire(name, detail = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...detail });
  }
};

document.querySelectorAll("[data-track]").forEach((el) => {
  el.addEventListener("click", () => {
    tracking.fire(el.dataset.track, {
      site: "amanda-schrem-tuition",
      label: el.dataset.label || el.textContent.trim()
    });
  });
});

const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-lead-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    tracking.fire("lead_form_submit", {
      site: "amanda-schrem-tuition",
      form: form.dataset.leadForm
    });
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Thanks. Amanda will be able to follow this up when enquiries are connected for launch.";
    }
  });
});

const chatToggle = document.querySelector("[data-chat-toggle]");
const chatPanel = document.querySelector("[data-chat-panel]");
if (chatToggle && chatPanel) {
  chatToggle.addEventListener("click", () => {
    const isOpen = chatPanel.classList.toggle("open");
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    tracking.fire("chat_toggle", { site: "amanda-schrem-tuition", open: isOpen });
  });
}

const chatAnswer = document.querySelector("[data-chat-answer]");
document.querySelectorAll("[data-chat-reply]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.chatReply;
    const answers = {
      prices: "General tutoring is planned from GBP 38-45 per hour. SEND-aware one-to-one support is planned from GBP 50-60 per hour depending on need, travel and preparation.",
      areas: "Amanda is positioned for Stockport, Cheadle, Cheadle Hulme, Bramhall, Hazel Grove, Sale, Altrincham and selected South Manchester areas.",
      trial: "The best next step is a free parent fit call to discuss the learner's needs, school year, subject, confidence and location."
    };
    if (chatAnswer) chatAnswer.textContent = answers[key] || answers.trial;
    tracking.fire("chat_quick_reply", { site: "amanda-schrem-tuition", topic: key });
  });
});
