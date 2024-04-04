const primaryNav = document.querySelector(".primary-navigation");
const burger = document.querySelector(".humberger");

burger.addEventListener("click", function () {
  setTimeout(() => {
    primaryNav.classList.toggle("show");
  }, 100);
  burger.classList.toggle("active");
});

const hero = document.querySelector(".hero");
