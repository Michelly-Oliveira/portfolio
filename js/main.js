const navbarItems = document.querySelectorAll(".navbar-item");

function changeActiveClass(event) {
  const liElement = event.target.parentElement;

  if (liElement.matches("li")) {
    navbarItems.forEach((item) => {
      item.className = "navbar-item";
    });

    liElement.className = "navbar-item active";
  }
}

navbarItems.forEach((item) => {
  item.addEventListener("click", changeActiveClass);
});
