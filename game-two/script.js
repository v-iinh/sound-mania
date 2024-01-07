const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const keys = {
    space: {
        pressed: false
    }
};

function menu(){
    document.getElementById("menu").style.display = "none";
    togglePlayPause()
}

function spaceKey() {
    if (keys.space.pressed) {
        const btn1 = document.getElementById("btn1");
        btn1.style.backgroundColor = "#ffb1e8";
        setTimeout(function () {
          btn1.style.backgroundColor = "black";
        }, 100);
    }
}

const recY = [0, -15, -30, -45, -60];
const rectangles = [
  { x: 0, y: 0, color: "#ff5d5d", velocity: 0 },
  { x: 50, y: 0, color: "#6ad1fe", velocity: 0 },
  { x: 100.05, y: 0, color: "#23cf57", velocity: 0 },
  { x: 151, y: 0, color: "#fe781f", velocity: 0 },
  { x: 201, y: 0, color: "#fffc5d", velocity: 0 },
  { x: 251, y: 0, color: "#965dff", velocity: 0 }
];

function getRandomY() {
  const randomIndex = Math.floor(Math.random() * recY.length);
  return recY[randomIndex];
}

const rectangleWidth = 15;
const rectangleHeight = 20; //window.innerheight
let gravity = 0.5; 

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

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case ' ':
            keys.space.pressed = true;
            spaceKey();
            break;
        case 'Shift':
            keys.space.pressed = true;
            menu();
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case ' ':
            keys.space.pressed = false;
            break;
    }
});

function togglePlayPause() {
    var audio = document.getElementById("audio");
    var playPauseButton = document.getElementById("playPauseButton");
    var playPauseIcon = document.getElementById("playPauseIcon");
  
    if (audio.paused) {
        audio.play();
        playPauseIcon.className = "fas fa-pause";
    } else {
        audio.pause();
        playPauseIcon.className = "fas fa-play";
    }
  }