const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const recY = [0, -15, -30, -45, -60];

const rectangles = [
  { x: 0, y: getRandomY(), color: "#ff5d5d", velocity: 0 },
  { x: 50, y: getRandomY(), color: "#6ad1fe", velocity: 0 },
  { x: 100.05, y: getRandomY(), color: "#23cf57", velocity: 0 },
  { x: 151, y: getRandomY(), color: "#fe781f", velocity: 0 },
  { x: 201, y: getRandomY(), color: "#fffc5d", velocity: 0 },
  { x: 251, y: getRandomY(), color: "#965dff", velocity: 0 }
];

function getRandomY() {
  const randomIndex = Math.floor(Math.random() * recY.length);
  return recY[randomIndex];
}

const rectangleWidth = 50;
const rectangleHeight = 10;
const gravity = 1.2;

function drawRectangles() {
  rectangles.forEach(rectangle => {
    gameCtx.fillStyle = rectangle.color;
    gameCtx.fillRect(rectangle.x, rectangle.y, rectangleWidth, rectangleHeight);
  });
}

function updateRectangles() {
    rectangles.forEach(rectangle => {

      rectangle.velocity = gravity;
  
      rectangle.y += rectangle.velocity;
  
      if (rectangle.y > gameCanvas.height - rectangleHeight) {
        rectangle.y = getRandomY();
      }
    });
  }

function gameLoop() {
  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  updateRectangles();
  drawRectangles();
  requestAnimationFrame(gameLoop);
}

gameLoop();