  const links = document.querySelectorAll("a");
  const overlay = document.getElementById("transition");
  const page = document.getElementById("page");

  // Fade IN on load
  window.addEventListener("load", () => {
    page.classList.add("fade-in");
  });

  links.forEach(link => {
    if (link.href && link.href.includes(window.location.origin)) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = this.href;

        // Start animation
        overlay.classList.add("active");
        page.classList.remove("fade-in");
        page.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    }
  });
