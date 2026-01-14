// Mobile menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// Theme toggle
const toggle = document.getElementById("themeToggle");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "light" || (!storedTheme && prefersLight)) {
  document.body.classList.add("light");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light")
    ? "light"
    : "dark";

  localStorage.setItem("theme", theme);
}); 

