function toggleMenu() {
    var linksElement = document.getElementById("links");
    var menuIcon = document.getElementById("menu");

    if (linksElement.style.display === "block") {
      linksElement.style.display = "none";
      // Change the class to "fa-bars" to show the bars icon
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    } else {
      linksElement.style.display = "block";
      // Change the class to "fa-times" to show the X icon
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    }
  }

  // Add event listener to the document to close menu on outside click
  document.addEventListener("click", function(event) {
    var linksElement = document.getElementById("links");
    var menuIcon = document.getElementById("menu");
    var targetElement = event.target;

    // Check if the clicked element is outside the menu and menu icon
    if (!linksElement.contains(targetElement) && !menuIcon.contains(targetElement)) {
      linksElement.style.display = "none";
      // Change the class to "fa-bars" to show the bars icon
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });