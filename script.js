const circle = document.querySelector(".circle");
const outline = document.querySelector(".outline");
const leftEye = document.querySelector(".left-eye");
const rightEye = document.querySelector(".right-eye");

function random(number) {
  return Math.floor(Math.random() * number);
}

circle.addEventListener("click", function ColorHandler() {
  const randomColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  leftEye.style.fill = randomColor;
  rightEye.style.fill = randomColor;
  outline.style.fill = randomColor;
  circle.style.boxShadow = "0 0 0 10px " + randomColor;
});

circle.addEventListener("mouseover", function BlinkOnHandler() {
  leftEye.style.animation = "blink 0.8s infinite alternate";
  rightEye.style.animation = "blink 0.8s infinite alternate";
});

circle.addEventListener("mouseleave", function BlinkOffHandler() {
  leftEye.style.animation = "";
  rightEye.style.animation = "";
});
