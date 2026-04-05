// Grid
const container = document.querySelector("#gridContainer");

for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    container.appendChild(cell);
    }   
    
// Hover effect

const gridCellArray = Array.from(document.querySelectorAll(".grid-cell"));
let isDrawing = false;

function coloring(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = "black";
    }
}

function startDrawing(event) {
    isDrawing = true;
    event.target.style.backgroundColor = "black";
  }

function stopDrawing() {
    isDrawing = false;
    }

gridCellArray.forEach((cell) => {
    cell.addEventListener("mousedown", startDrawing);
    cell.addEventListener("mouseover", coloring);
    });
  
    document.addEventListener("mouseup", stopDrawing);
   

  
 





