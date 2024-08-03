const transitionLeft = document.querySelector(".transition-left");
const transitionRight = document.querySelector(".transition-right");
const alternatingImages = document.querySelectorAll(".alternating-images");
const bottom = document.querySelector("#bottom");

let currentRotateIndex = 0;
const alternationTurns = [];

function addAlternation() {
  for (let i = 0; i < alternatingImages.length; i++) {
    const div = document.createElement("div");
    div.className = "alternation-turns";
    bottom.appendChild(div);
    alternationTurns.push(div);
  }
  alternationTurns[0].classList.add("active");
  alternationTurns.forEach((turn, index) => {
    turn.addEventListener("click", () => changeRotate(index));
  });
}

function changeRotate(rotateIndex) {  
  alternatingImages[currentRotateIndex].classList.remove("block");
  alternationTurns[currentRotateIndex].classList.remove("active");
  currentRotateIndex = rotateIndex;
  alternationTurns[currentRotateIndex].classList.add("active");
  alternatingImages[currentRotateIndex].classList.add("block");
}

function nextRotate() {
  let newRotateIndex = currentRotateIndex + 1;
  if (newRotateIndex > alternatingImages.length - 1) {
    newRotateIndex = 0;
  }
  changeRotate(newRotateIndex);
}

function previousRotate() {
  let newRotateIndex = currentRotateIndex - 1;
  if (newRotateIndex < 0) {
    newRotateIndex = alternatingImages.length - 1;
  }
  changeRotate(newRotateIndex);
}

addAlternation();
transitionLeft.addEventListener("click", previousRotate);

transitionRight.addEventListener("click", nextRotate);
