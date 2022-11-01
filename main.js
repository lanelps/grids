import "./style.css";

function generateString() {
  let string = ``;

  for (let j = 0; j < 1000 / 6.01667; j++) {
    Math.random() < 0.5 ? (string += `╱`) : (string += `╲`);
  }

  return string;
}

function generateGrid() {
  const grid = [];

  for (let i = 0; i < 20; i++) {
    grid.push(generateString());
  }

  return grid;
}

function createGrid() {
  const gridContainer = document.createElement(`pre`);

  const grid = generateGrid();

  for (let i = 0; i < grid.length; i++) {
    const gridRow = document.createElement(`div`);
    for (let j = 0; j < grid[i].length; j++) {
      const pixel = document.createElement(`span`);
      pixel.innerText = grid[i][j];
      gridRow.appendChild(pixel);
    }
    // gridRow.innerText = grid[i];
    gridContainer.appendChild(gridRow);
  }

  document.body.appendChild(gridContainer);
}

function main() {
  createGrid();
}

addEventListener("DOMContentLoaded", () => {
  main();
});
