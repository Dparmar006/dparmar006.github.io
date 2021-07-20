window.onload = navToggle;

function navToggle() {
  let mobNavButton = document.getElementById("mobile-nav-toggle");
  let mobNav = document.getElementById("mobile-nav");
  mobNavButton.addEventListener("click", () => {
    // mobNavButton.innerHTML == `<i class="fas fa-bars"></i>`;
    if (mobNavButton.innerHTML == `<i class="fas fa-times"></i>`) {
      // mobNavButton.innerHTML = "";
      mobNav.style.height = "0px";
      mobNavButton.innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
      mobNavButton.innerHTML = `<i class="fas fa-times"></i>`;
      mobNav.style.height = "fit-content";
    }
  });
}
