const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".ull li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



const toggleBtn = document.getElementById("menu-toggle");
const navLink = document.querySelector(".nav-link");

toggleBtn.addEventListener("click", () => {
  navLink.classList.toggle("active");
});