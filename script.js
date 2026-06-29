const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const modal = document.querySelector("[data-modal]");
const openModal = document.querySelector("[data-open-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const copyEmail = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 8);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

openModal?.addEventListener("click", () => {
  if (typeof modal?.showModal === "function") {
    modal.showModal();
  }
});

closeModal?.addEventListener("click", () => modal?.close());

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

copyEmail?.addEventListener("click", async () => {
  const email = copyEmail.getAttribute("data-copy-email") ?? "";

  try {
    await navigator.clipboard.writeText(email);
    if (copyStatus) copyStatus.textContent = "E-Mail-Adresse kopiert.";
  } catch {
    if (copyStatus) copyStatus.textContent = email;
  }
});
