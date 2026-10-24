const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const modal = document.getElementById("letterModal");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
function showLetter() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  closeLetter.focus();
}
function hideLetter() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openLetter.focus();
}
openLetter.addEventListener("click", showLetter);
closeLetter.addEventListener("click", hideLetter);
modal.addEventListener("click", event => { if (event.target === modal) hideLetter(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("show")) hideLetter(); });

document.getElementById("hugButton").addEventListener("click", () => {
  const messages = [
    "A big warm hug, wrapped in all my love. ♡",
    "Consider yourself hugged and kissed! mwah 💋",
    "If I were there, I'd be holding you right now. ♡",
    "One hug today, a million more in our future. ✧"
  ];
  const message = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("hugMessage").textContent = message;
});
