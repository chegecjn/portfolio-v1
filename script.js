function toggleMenu() {
       const mobileMenu = document.querySelector(".mobile-menu-links");
       const projDesc = document.querySelector(".portfolio"); //proj desc has z-index higher than mobile menu
        mobileMenu.classList.toggle("hidden");
        projDesc.style.display = "none";
      }
