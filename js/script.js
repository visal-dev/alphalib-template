$(document).ready(function () {
  const $menuToggle = $("#menu-toggle");
  const $mobileMenu = $("#mobile-menu");
  const $closeMenu = $("#close-menu");

  function closeMenu() {
    $mobileMenu.removeClass("hidden");
    $("#menu-icon, #close-icon").toggle();
  }

  $menuToggle.click(function () {
    $mobileMenu.toggleClass("hidden");
    $("#menu-icon, #close-icon").toggle();
  });

  $closeMenu.click(function () {
    closeMenu();
  });
});
