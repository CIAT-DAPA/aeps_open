window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#logo-aeps");
    console.log(navbarCollapsible)
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("logo-aeps-p");
    } else {
      navbarCollapsible.classList.add("logo-aeps-p");
    }
  };

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);
});
