const nav = document.querySelector("nav");
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener(`scroll`, () => {
  if (window.scrollY > navHeight) {
    // nav.style.backgroundColor = `#09847f`;
    // nav.style.color = `#d9d9d9`;
    // nav.style.fontWeight = "800";
    nav.animate([{ backgroundColor: "#09847f" }], {
      duration: 1000,
      easing: "linear",
    });
  } else {
    nav.style.backgroundColor = `transparent`;
    nav.style.color = `#000000`;
  }
});

const Mbutton = document.querySelector(".navbar-toggler");
const Mnavbar = document.querySelector(".navbar-collapse");
Mbutton.addEventListener("click", function () {
  Mnavbar.style.position = "absolute";
  Mnavbar.style.top = "63px";
  Mnavbar.style.left = "0";
  Mnavbar.style.right = "0";
  Mnavbar.style.backgroundColor = "#09847f";
});
