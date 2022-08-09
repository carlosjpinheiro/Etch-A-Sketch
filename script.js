const sketchpad = document.querySelector('#sketchpad');
const gridSize = document.querySelector('#gridSize');
const rainbowBtn = document.querySelector('#rainbow');
const grayscaleBtn = document.querySelector('#grayscale');
const blackBtn = document.querySelector('#black');
const clear = document.querySelector('#clear');
let grid = Number(gridSize.value);
let squares = document.querySelectorAll('.square');
let modeSwitch = 0; //controls color mode. 0 is black, 1 is rainbow and 2 is grayscale

drawGrid(grid);

function drawGrid(size) {
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement('div');
        newRow.classList = 'row';
        sketchpad.appendChild(newRow);
        for (let j = 0; j < size; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList = 'square';
            newRow.appendChild(newSquare);            
        }
    }
    squares = document.querySelectorAll('.square');
    listenSquare();
}
function generateRgb() {
    r = Math.floor(Math.random()*255+1);
    g = Math.floor(Math.random()*255+1);
    b = Math.floor(Math.random()*255+1);
    return `rgb(${r},${g},${b})`;
}

function increaseGray(squareColor) {
    let regex = /([0-9]+)/g;
    let rgbArray = squareColor.match(regex);
    let newValue = Math.floor(rgbArray[0] - (255 * 0.1));
    if (newValue < 0) {
        return `rgb(0,0,0)`
    }
    return `rgb(${newValue},${newValue},${newValue})`;
}

function listenSquare() {
    squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        switch (modeSwitch) {
            case 0:
                square.style.cssText = '';
                square.classList = 'square colored';
                break
            case 1:
                square.style.cssText = `background-color:${generateRgb()}`;
                break
            case 2:
                if (square.style.backgroundColor == '') {square.style.backgroundColor = '#FFFFFF'}
                square.style.backgroundColor = increaseGray(square.style.backgroundColor);
                break
        }
    })
})}

clear.addEventListener('click', () => {
    sketchpad.innerHTML = "";
    drawGrid(grid);
})

gridSize.addEventListener('change', () => {
    sketchpad.innerHTML = "";
    grid = Number(gridSize.value);
    drawGrid(grid);    
})

rainbowBtn.addEventListener('click', () => {
    modeSwitch = 1;
    blackBtn.classList.remove('selected');
    grayscaleBtn.classList.remove('selected');
    rainbowBtn.classList = 'selected';
    
})

blackBtn.addEventListener('click', () => {
    modeSwitch = 0;
    grayscaleBtn.classList.remove('selected');
    rainbowBtn.classList.remove('selected');
    blackBtn.classList = 'selected';
})

grayscaleBtn.addEventListener('click', () => {
    modeSwitch = 2;
    rainbowBtn.classList.remove('selected');
    blackBtn.classList.remove('selected');
    grayscaleBtn.classList = 'selected';
})
