/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const bodyElement = document.querySelector("body");
const gridElement = document.querySelector(".grid");
const cellsElementsArray = gridElement.querySelectorAll(".cell");
var position = 1;

cellsElementsArray[position].style.backgroundColor = "red";

const keydownFunction = (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  console.log(event, position);

  switch (event.key) {
    case "ArrowDown":
      if (position < 21) {
        cellsElementsArray[position].style.backgroundColor = "#E6E6E6";
        position = position + 7;
        cellsElementsArray[position].style.backgroundColor = "red";
      }
      break;

    case "ArrowUp":
      if (position > 7) {
        cellsElementsArray[position].style.backgroundColor = "#E6E6E6";
        position = position - 7;
        cellsElementsArray[position].style.backgroundColor = "red";
      }
      break;
    case "ArrowLeft":
      if (position % 7 !== 0) {
        cellsElementsArray[position].style.backgroundColor = "#E6E6E6";
        position = position - 1;
        cellsElementsArray[position].style.backgroundColor = "red";
      }
      break;
    case "ArrowRight":
      if (
        position !== 6 &&
        position !== 13 &&
        position !== 20 &&
        position !== 27
      ) {
        cellsElementsArray[position].style.backgroundColor = "#E6E6E6";
        position = position + 1;
        cellsElementsArray[position].style.backgroundColor = "red";
      }
      break;
    case "Enter":
      if (bodyElement.style.backgroundColor) {
        bodyElement.style.backgroundColor = "";
      } else {
        bodyElement.style.backgroundColor = "darkgrey";
      }
      break;
    case " ":
      // Do something for "space" key press.
      break;
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
};

bodyElement.addEventListener("keydown", keydownFunction, false);

gridElement.addEventListener("click", () => {
  if (gridElement.style.outline) {
    gridElement.style.outline = "";
  } else {
    gridElement.style.outline = "red dashed 6px";
  }
});
