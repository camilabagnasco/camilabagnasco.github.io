/* =========================
   Mobile menu
========================= */
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinksItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

/* =========================
   Reveal on scroll
========================= */
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
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
}


/* =========================
   Active nav link on scroll
========================= */
const navLinksItems = document.querySelectorAll(".nav a[href^='#']");
const sections = document.querySelectorAll("section[id]");

if (navLinksItems.length && sections.length) {
  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinksItems.forEach(link =>
            link.classList.remove("active")
          );

          const activeLink = document.querySelector(
            `.nav a[href="#${entry.target.id}"]`
          );

          activeLink?.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6,
      rootMargin: "-88px 0px 0px 0px" // compensa header sticky
    }
  );

  sections.forEach(section => navObserver.observe(section));
}
;
