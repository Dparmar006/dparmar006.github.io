window.onload = () => {
  navToggle();
  const startDate = "2021-05-01"
  const duration = calculateDuration(startDate);
  document.getElementById("exp-val").innerHTML = `( Total: ${duration.years} Years, ${duration.months} months ) `;
}

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


function calculateDuration(startDate) {
  let today = new Date();
  let start = new Date(startDate);

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  return {
    years: years,
    months: months
  };
}
