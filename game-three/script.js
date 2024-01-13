const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let score = 0
let combo = 0
let highestCombo = 0

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let squareSize = 200;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let teleporting = false;

function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!teleporting) {
    if (squareSize > 100) {
        ctx.fillStyle = 'transparent';
      } else {
        ctx.fillStyle = '#ff5d5d';
      }      
  }

  const halfSize = squareSize / 2;
  ctx.fillRect(centerX - halfSize, centerY - halfSize, squareSize, squareSize);
  ctx.strokeStyle = '#ff5d5d';
  ctx.lineWidth = 5;
  ctx.strokeRect(centerX - halfSize, centerY - halfSize, squareSize, squareSize);
}

function handleClick(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
  
    if (!teleporting && mouseX >= centerX - squareSize / 2 && mouseX <= centerX + squareSize / 2 &&
        mouseY >= centerY - squareSize / 2 && mouseY <= centerY + squareSize / 2) {
      console.log('test');
    } else if (teleporting && mouseX >= centerX - squareSize / 2 && mouseX <= centerX + squareSize / 2 &&
               mouseY >= centerY - squareSize / 2 && mouseY <= centerY + squareSize / 2) {
      console.log('test');
    }
  }

canvas.addEventListener('click', handleClick);

function teleportSquare() {
  teleporting = true;
  squareSize = 100;
  drawSquare();
  setTimeout(() => {
    centerX = Math.random() * (canvas.width - squareSize) + squareSize / 2;
    centerY = Math.random() * (canvas.height - squareSize) + squareSize / 2;
    squareSize = 200;
    teleporting = false;
  }, 1000);
}

setInterval(teleportSquare, 2000);

function update() {
  if (!teleporting) {
    squareSize -= 2;
    if (squareSize < 100) {
      squareSize = 100;
    }
    drawSquare();
  }
  requestAnimationFrame(update);
}

update();