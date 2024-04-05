const primaryNav = document.querySelector(".primary-navigation");
const burger = document.querySelector(".humberger");

burger.addEventListener("click", function () {
  setTimeout(() => {
    primaryNav.classList.toggle("show");
  }, 100);
  burger.classList.toggle("active");
});

var typed = new Typed(".auto-type", {
  strings: ["Front-End Developer"],
  typeSpeed: 250,
  backSpeed: 150,
  loop: true,
});

const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", function () {
  const scrollposition = window.scrollY;

  if (scrollposition >= window.innerHeight * 0.01) {
    toTop.style.display = "block";
    setTimeout(() => {
      toTop.style.display = "none";
    }, 250);

    setTimeout(() => {
      toTop.style.display = "block";
    }, 500);
  } else {
    setTimeout(() => {
      toTop.style.display = "none";
    }, 600);
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

let section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
  });
};
