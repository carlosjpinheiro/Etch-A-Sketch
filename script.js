const sketchpad = document.querySelector('#sketchpad');
const gridSize = document.querySelector('#gridSize');
const rainbowBtn = document.querySelector('#rainbow');
const grayscaleBtn = document.querySelector('#grayscale');
let grid = Number(gridSize.value);
let squares = document.querySelectorAll('.square');
drawGrid(grid);

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div');
        newRow.classList = 'row';
        sketchpad.appendChild(newRow);
        for (let j = 0; j < size; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList = 'square';
            // newSquare.textContent = 'x';        
            newRow.appendChild(newSquare);
            
        }
    }
    squares = document.querySelectorAll('.square');
    listenSquare();
}

function listenSquare() {
    squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.classList = 'square colored';
    })
})}

gridSize.addEventListener('change', () => {
    sketchpad.innerHTML = "";
    grid = Number(gridSize.value);
    drawGrid(grid);    
})




