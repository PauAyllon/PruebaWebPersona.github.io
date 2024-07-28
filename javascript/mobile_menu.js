function toggleMenu2() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "flex") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "flex";
    }
  }