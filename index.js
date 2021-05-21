function leftArrowPressed() {
  let element = document.querySelector(".cuadrado-rojo");
  element.style.left = parseInt(getComputedStyle(element).left) - 5 + "px";
}

function rightArrowPressed() {
  let element = document.querySelector(".cuadrado-rojo");
  element.style.left = parseInt(getComputedStyle(element).left) + 5 + "px";
}

function upArrowPressed() {
  let element = document.querySelector(".cuadrado-rojo");
  element.style.top = parseInt(getComputedStyle(element).top) - 5 + "px";
}

function downArrowPressed() {
  let element = document.querySelector(".cuadrado-rojo");
  element.style.top = parseInt(getComputedStyle(element).top) + 5 + "px";
}

function moveSelection(event) {
  switch (event.keyCode) {
    case 37:
      leftArrowPressed();
      break;

    case 39:
      rightArrowPressed();
      break;

    case 38:
      upArrowPressed();
      break;

    case 40:
      downArrowPressed();
      break;
  }
}

function main() {
  document.addEventListener("keydown", moveSelection);
}

main();
