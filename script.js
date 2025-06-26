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

    const scrollContainer = document.querySelector('.project-category-filter-scroll');
    const btnLeft = document.querySelector('.category-scroll-arrow.left');
    const btnRight = document.querySelector('.category-scroll-arrow.right');

    function updateArrows() {
      if (!scrollContainer) return;
      // Toleransi 2px untuk bug browser
      const scrollLeft = Math.round(scrollContainer.scrollLeft);
      const maxScroll = Math.round(scrollContainer.scrollWidth - scrollContainer.clientWidth);

      if (scrollLeft <= 2) {
        btnLeft.style.display = 'none';
      } else {
        btnLeft.style.display = 'flex';
      }

      if (scrollLeft >= maxScroll - 2) {
        btnRight.style.display = 'none';
      } else {
        btnRight.style.display = 'flex';
      }
    }

    if (btnLeft && btnRight && scrollContainer) {
      // Inisialisasi
      updateArrows();

      // Scroll dengan tombol
      btnLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
      });
      btnRight.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
      });

      // Update panah saat scroll
      scrollContainer.addEventListener('scroll', updateArrows);

      // Update panah saat resize (jika lebar berubah)
      window.addEventListener('resize', updateArrows);
    }
});