// Select Elements
const mainContainer = document.querySelector('.main-container');
const setGridBtn = document.querySelector('.set-grid-btn');
setGridBtn.addEventListener('click', () => {
  clearGrid();
  createGrid(sideLength = prompt("Choose grid-size:"));
});

// Different Modes
let flag = 0;
const darkenBtn = document.querySelector('.darken-btn');
darkenBtn.addEventListener('click', () => flag = 0);
const colorfulBtn = document.querySelector('.colorful-btn');
colorfulBtn.addEventListener('click', () => flag = 1);

// Reset Grid
function clearGrid()
{
  while (mainContainer.firstChild)
  {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}

// Random Color Change of Grid Cells
function changeColor()
{
  if (this.style.backgroundColor === 'rgb(255, 255, 255)' || flag === 1)
  {
    this.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ','
    + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
  }
  else if (flag === 0)
  {
    let lightness = parseInt(this.style.filter.match(/\d+/));
    lightness != 0 ? this.style.filter = `brightness(${lightness - 10}%)` : false;
  }
}

// Create Grid
function createGrid(n)
{
  // Declaration
  let newDiv;
  let gridSize = n**2;

  // CSS Grid Setup
  mainContainer.style.setProperty('grid-template-rows', `repeat(${n}, 1fr)`);
  mainContainer.style.setProperty('grid-template-columns', `repeat(${n}, 1fr)`);

  // Dynamically Creating Div-Elements
  for(let i=0; i<gridSize; i++)
  {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    newDiv.style.backgroundColor = '#FFFFFF';
    newDiv.style.filter = `brightness(100%)`;
    newDiv.addEventListener('mouseover', changeColor, true);
    mainContainer.appendChild(newDiv);
  }
}

// Base Grid
createGrid(sideLength = 16);
