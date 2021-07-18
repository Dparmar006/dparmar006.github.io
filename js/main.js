window.onload = navToggle;

function navToggle() {
  let mobNavButton = document.getElementById("mobile-nav-toggle");
  let mobNav = document.getElementById("mobile-nav");
  mobNavButton.addEventListener("click", () => {
    mobNavButton.innerHTML == `<i class="fas fa-bars"></i>`;
    if (mobNavButton.innerHTML == `<i class="fas fa-bars"></i>`) {
      // mobNavButton.innerHTML = "";
      mobNavButton.innerHTML = `<i class="fas fa-times"></i>`;
      mobNav.style.top = "0%";
    } else {
      mobNavButton.innerHTML = `<i class="fas fa-bars"></i>`;
      mobNav.style.top = "-100%";
    }
  });
}
