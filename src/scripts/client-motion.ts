// Client-only helpers: spark particles, scroll reveal, mobile nav; loaded from BaseLayout.

function createSparks(containerId: string, count: number) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("div");
    spark.className = "spark";
    const duration = 1 + Math.random() * 3;
    const delay = Math.random() * 5;
    const tx = (Math.random() - 0.5) * 300;
    spark.style.left = `${Math.random() * 100}%`;
    spark.style.setProperty("--tx", `${tx}px`);
    spark.style.animation = `spark-rise ${duration}s linear ${delay}s infinite`;
    container.appendChild(spark);
  }
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const panel = document.getElementById("nav-mobile-panel");
  if (!toggle || !panel) return;
  toggle.addEventListener("click", () => {
    panel.classList.toggle("hidden");
  });
}

function run() {
  createSparks("hero-sparks", 50);
  createSparks("cta-sparks", 30);
  createSparks("skool-sparks", 24);
  createSparks("page-sparks", 36);
  initReveal();
  initMobileNav();
}

document.addEventListener("DOMContentLoaded", run);
