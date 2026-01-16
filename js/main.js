/* =========================
   Mobile menu
========================= */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


/* =========================
   Reveal on scroll
========================= */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => revealObserver.observe(el));


/* =========================
   Theme toggle
========================= */
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  root.setAttribute("data-theme", storedTheme);
} else {
  root.setAttribute("data-theme", prefersLight ? "light" : "dark");
}

toggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});


/* =========================
   Active nav link on scroll
========================= */
const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.remove("active"));
        const active = document.querySelector(
          `.nav a[href="#${entry.target.id}"]`
        );
        active?.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach(section => navObserver.observe(section));
