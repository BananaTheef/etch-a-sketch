const mainContainer = document.querySelector('#main-container');
const body = document.querySelector('body');

const clearGridBtn = document.createElement('button');
clearGridBtn.textContent = 'Clear Grid';
clearGridBtn.addEventListener('click', clearGrid);
body.appendChild(clearGridBtn);

function clearGrid()
{
  window.location.reload();
}

/*function getRandomColor ()
{
  let color = '#';
  let letter = '0123456789ABCDEF';

  for (let i=0; i<6; i++)
  {
    color+= letter[Math.floor(Math.random() * 16)];
  }

  return color;
}*/


function changeColor()
{
  this.style.backgroundColor = /*getRandomColor();*/'rgb(' + Math.floor(Math.random() * 256) + ','
  + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
}

function createGrid()
{
  let newDiv;
  let divClassName;
  let divIdName;
  let sideLength = prompt("Choose grid-size:");
  let gridSize = sideLength**2;

  mainContainer.style.setProperty('display', 'grid');
  mainContainer.style.setProperty('grid-template-rows', `repeat(${sideLength}, 1fr)`);
  mainContainer.style.setProperty('grid-template-columns', `repeat(${sideLength}, 1fr)`);

  for(let i=0; i<gridSize; i++)
  {
    newDiv = document.createElement('div');
    divIdName = 'item' + (i+1);
    newDiv.setAttribute('id', divIdName);
    newDiv.classList.add('grid-item');
    //newDiv.textContent = 'Luben';
    newDiv.style.backgroundColor = '#FFFFFF';
    newDiv.addEventListener('mouseover', changeColor);
    mainContainer.appendChild(newDiv);
  }
}

createGrid();
