// Grid
const container = document.querySelector("#gridContainer");

for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.style.width = "32px";
    container.appendChild(cell);
    }   

// Hover effect

let gridCellArray = Array.from(document.querySelectorAll(".grid-cell"));
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
   

// Reset and choose grid size

//Pour supprimer la grille
function removeGrid() {
    let gridContainer = document.getElementById("gridContainer");
    gridContainer.parentNode.removeChild(gridContainer);
}

//Pour rajouter une grille
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
   let userChoice = prompt("How many cells per side? (max 50)");
   let userNumber = Number(userChoice.replace(",", ".")); 
   let gridCells = userNumber * userNumber;
   console.log(gridCells); 
   let cellWidth = (528 - userNumber) / userNumber;
   console.log(cellWidth);

   if (userChoice === null || userChoice.trim() === "") {
        alert("Error : blank");
    } else if (!isNaN(userNumber) &&
       Number.isInteger(userNumber) &&
       userChoice >= 1 && userChoice <= 50) {
       //alert("yay");
      removeGrid();

      // créer un nouveau container
      let gridContainer = document.createElement("div");
      gridContainer.setAttribute("id", "gridContainer");
      document.body.appendChild(gridContainer);

      // créer la grille
      for (let i = 0; i < gridCells; i++) {
    const cell2 = document.createElement("div");
    cell2.classList.add("grid-cell");
    cell2.style.width = `${cellWidth}px`;
    cell2.style.height = `${cellWidth}px`;
    gridContainer.appendChild(cell2);
    }   

    // Les écouteurs d'évenement
let gridCellArray = Array.from(document.querySelectorAll(".grid-cell"));

gridCellArray.forEach((cell) => {
    cell.addEventListener("mousedown", startDrawing);
    cell.addEventListener("mouseover", coloring);
 });
  
document.addEventListener("mouseup", stopDrawing);

    } else {
       alert("error");
       };
    });

    
 





