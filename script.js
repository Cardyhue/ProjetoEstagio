document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transition = "all 0.3s ease";
      link.style.transform = "scale(1.15)";
      link.style.color = "#2ee6c5";
      link.style.textShadow = "0 0 8px #2ee6c5";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
      link.style.color = "#fff";
      link.style.textShadow = "none";
    });
  });
});