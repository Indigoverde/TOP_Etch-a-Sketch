// Grid
const container = document.querySelector("#gridContainer");

const gridSize = 16;
//const totalCells = gridSize * gridSize;

    for (let i = 1; i < 256; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        container.appendChild(cell);
        }   
    
// Pb avec le nombre de case à cause des bords