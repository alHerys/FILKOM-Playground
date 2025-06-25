document.addEventListener("DOMContentLoaded", function () {    
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("mainNavbar");
      const logo = document.getElementById("navbar-logo");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logo.src = "LOGO PUTIH.svg"; // Logo putih
      } else {
        navbar.classList.remove("scrolled");
        logo.src = "LOGO WARNA.svg"; // Logo berwarna
      }
    });

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sideMenu = document.getElementById('sideMenu');

    hamburgerBtn.addEventListener('click', function () {
      hamburgerBtn.classList.toggle('active');
      sideMenu.classList.toggle('active');
    });

    // Optional: close menu when link clicked (mobile UX)
    document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        sideMenu.classList.remove('active');
      });
    });

    // Optional: close menu when click outside
    document.addEventListener('click', function(e) {
      if (sideMenu.classList.contains('active') && !sideMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        sideMenu.classList.remove('active');
      }
    });
});