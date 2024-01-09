const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");

const keys = {
    space: {
        pressed: false
    }
};

function spaceKey() {
    if (keys.space.pressed) {
        const btn1 = document.getElementById("btn1");
        btn1.style.backgroundColor = "#ffb1e8";
        setTimeout(function () {
          btn1.style.backgroundColor = "black";
        }, 100);
    }
}

const recX = [34, 84, 134.05, 235, 285];
const rectangles = [
  { x: -204, y: 0, color: "#ff5d5d", velocity: 0 },
  { x: -170, y: 0, color: "#6ad1fe", velocity: 0 },
  { x: -136, y: 0, color: "#23cf57", velocity: 0 },
  { x: -102, y: 0, color: "#fe781f", velocity: 0 },
  { x: -68, y: 0, color: "#fffc5d", velocity: 0 },
  { x: -34, y: 0, color: "#965dff", velocity: 0 }
];

function getRandomX() {
  const randomIndex = Math.floor(Math.random() * recX.length);
  return recX[randomIndex];
}

const rectangleWidth = 15;
const rectangleHeight = window.innerHeight;
let gravity = 0; 

function drawRectangles() {
    rectangles.forEach(rectangle => {
      gameCtx.fillStyle = rectangle.color;
      gameCtx.fillRect(rectangle.x, rectangle.y, rectangleWidth, rectangleHeight);
    });
  }
  
  function updateRectangles() {
    rectangles.forEach(rectangle => {
      rectangle.velocity = gravity;
      rectangle.x += rectangle.velocity;
  
      if (rectangle.x > gameCanvas.width - rectangleWidth) {
        rectangle.x = getRandomX();
      }
    });
  }

  function menu(){
    const btn1 = document.getElementById('menu');
    const btn2 = document.getElementById('endgame');
    btn1.style.display = "none";
    btn2.style.display = "none";
    score = 0 
    document.getElementById("scoreText").innerHTML= "Score : " + score;
    gravity = 1.2
    audio.play()
    document.getElementById("playPauseIcon").className = "fas fa-pause";
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