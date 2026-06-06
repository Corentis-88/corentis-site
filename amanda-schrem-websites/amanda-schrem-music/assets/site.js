const tracking = {
  fire(name, detail = {}) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...detail });
  }
};

document.querySelectorAll("[data-track]").forEach((el) => {
  el.addEventListener("click", () => {
    tracking.fire(el.dataset.track, {
      site: "amanda-schrem-music",
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
      site: "amanda-schrem-music",
      form: form.dataset.leadForm
    });
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Thanks. Amanda will get back to you as soon as possible.";
    }
  });
});

const chatToggle = document.querySelector("[data-chat-toggle]");
const chatPanel = document.querySelector("[data-chat-panel]");
if (chatToggle && chatPanel) {
  chatToggle.addEventListener("click", () => {
    const isOpen = chatPanel.classList.toggle("open");
    chatToggle.setAttribute("aria-expanded", String(isOpen));
    tracking.fire("chat_toggle", { site: "amanda-schrem-music", open: isOpen });
  });
}

const chatAnswer = document.querySelector("[data-chat-answer]");
document.querySelectorAll("[data-chat-reply]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.chatReply;
    const answers = {
      prices: "Guide prices are GBP 24-27 for 30 minutes, GBP 36-40 for 45 minutes, and GBP 45-50 for 60 minutes depending on instrument and travel.",
      areas: "Amanda is best placed for Stockport, Cheadle, Cheadle Hulme, Bramhall, Hazel Grove, Sale, Altrincham and selected South Manchester areas.",
      trial: "The best next step is a short call to discuss age, instrument, goals, location and lesson length before arranging a first lesson."
    };
    if (chatAnswer) chatAnswer.textContent = answers[key] || answers.trial;
    tracking.fire("chat_quick_reply", { site: "amanda-schrem-music", topic: key });
  });
});
