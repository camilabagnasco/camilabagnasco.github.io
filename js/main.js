// Mobile menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // aparece solo una vez
          }
        });
      },
      {
        threshold: 0.2, // 20% visible
      }
    );

    reveals.forEach((el) => observer.observe(el));
  });
</script>


reveals.forEach(el => revealObserver.observe(el));

// Theme toggle
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Preferencia del sistema
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const storedTheme = localStorage.getItem("theme");

// Inicialización
if (storedTheme) {
  root.setAttribute("data-theme", storedTheme);
} else {
  root.setAttribute("data-theme", prefersLight ? "light" : "dark");
}

// Toggle manual
toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});


  const links = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('section');

  const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(
        `.nav a[href="#${entry.target.id}"]`
      );
      active?.classList.add("active");
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => navObserver.observe(section));

