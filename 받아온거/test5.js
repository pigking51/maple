const wrap = document.querySelector(".pageWrap");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const next2 = document.querySelector(".next2");
const prev2 = document.querySelector(".prev2");

next.addEventListener("click", function () {
  alert(`첫번째 다음`);
  wrap.animate([{ transform: "translateX(-300px)" }], {
    duration: 1000,
    easing: "ease-in",
    fill: "both",
  });
});
next2.addEventListener("click", function () {
  alert(`두번째 다음`);
  wrap.animate([{ transform: "translateX(-600px)" }], {
    duration: 1000,
    easing: "ease-in",
    fill: "both",
  });
});
prev.addEventListener("click", function () {
  alert(`첫번째 이전`);
  wrap.animate([{ transform: "translateX(0px)" }], {
    duration: 1000,
    easing: "ease-in",
    fill: "both",
  });
});
prev2.addEventListener("click", function () {
  alert(`두번째 이전`);
  wrap.animate([{ transform: "translateX(-300px)" }], {
    duration: 1000,
    easing: "ease-in",
    fill: "both",
  });
});
