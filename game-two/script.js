const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");
let score = 0
let combo = 0
let highestCombo = 0

let difficulty = 289
const notPress = [289, 289, 287.75]

const keys = {
    space: {
        pressed: false
    },
    shift: {
      pressed: false
  },
};

const recX = [];
for (let i = 0; i <= 250; i += 1) {
  recX.push(-i);
}

const rectangles = [
  { x: -20, y: 0, color: "#ff5d5d", velocity: 0 },
  { x: -60, y: 0, color: "#6ad1fe", velocity: 0 },
  { x: -100, y: 0, color: "#23cf57", velocity: 0 },
  { x: -140, y: 0, color: "#fe781f", velocity: 0 },
  { x: -180, y: 0, color: "#fffc5d", velocity: 0 },
  { x: -220, y: 0, color: "#965dff", velocity: 0 }
];

function getRandomX() {
  let newRandomX;
  do {
    newRandomX = recX[Math.floor(Math.random() * recX.length)];
  } while (rectangles.some(rectangle => Math.abs(newRandomX - rectangle.x) < rectangleWidth));
  return newRandomX;
}


const rectangleWidth = 10;
const rectangleHeight = window.innerHeight;
let gravity = 0; 

document.getElementById("easy").addEventListener("click", function() {
  gravity = 1.5;

  rectangles[0].x = -20;
  rectangles[1].x = -60;
  rectangles[2].x = -100;
  rectangles[3].x = -140;
  rectangles[4].x = -180;
  rectangles[5].x = -220; 

  document.getElementById("easy").style.color = "#23cf57";
  document.getElementById("medium").style.color = "white";
  document.getElementById("hard").style.color = "white";
  document.getElementById("menu").style.display = "none"; 
  document.getElementById("endgame").style.display = "none"; 

  if (audio.paused) {
    audio.play();
    document.getElementById("playPauseIcon").className = "fas fa-pause";
  } else {
      audio.currentTime = 0;
      audio.play();
  }

  score = 0 
  document.getElementById("scoreText").innerHTML= "Score : 0";

  combo = 0 
  document.getElementById("comboText").innerHTML= "Current Combo : 0";

  highestCombo = 0 
  document.getElementById("comboText1").innerHTML= "Highest Combo : 0";

  difficulty = notPress[0]
});

document.getElementById("medium").addEventListener("click", function() {
  gravity = 2;

  rectangles[0].x = -20;
  rectangles[1].x = -60;
  rectangles[2].x = -100;
  rectangles[3].x = -140;
  rectangles[4].x = -180;
  rectangles[5].x = -220; 

  document.getElementById("easy").style.color = "white";
  document.getElementById("medium").style.color = "#fffc5d";
  document.getElementById("hard").style.color = "white";
  document.getElementById("menu").style.display = "none"; 
  document.getElementById("endgame").style.display = "none"; 

  if (audio.paused) {
    audio.play();
    document.getElementById("playPauseIcon").className = "fas fa-pause";
  } else {
      audio.currentTime = 0;
      audio.play();
  }

  score = 0 
  document.getElementById("scoreText").innerHTML= "Score : 0";

  combo = 0 
  document.getElementById("comboText").innerHTML= "Current Combo : 0";

  highestCombo = 0 
  document.getElementById("comboText1").innerHTML= "Highest Combo : 0";

  difficulty = notPress[1]
});

document.getElementById("hard").addEventListener("click", function() {
  gravity = 2.5;

  rectangles[0].x = -20;
  rectangles[1].x = -60;
  rectangles[2].x = -100;
  rectangles[3].x = -140;
  rectangles[4].x = -180;
  rectangles[5].x = -220; 

  document.getElementById("easy").style.color = "white";
  document.getElementById("medium").style.color = "white";
  document.getElementById("hard").style.color = "#ff5d5d";
  document.getElementById("menu").style.display = "none";
  document.getElementById("endgame").style.display = "none";  

  if (audio.paused) {
    audio.play();
    document.getElementById("playPauseIcon").className = "fas fa-pause";
  } else {
      audio.currentTime = 0;
      audio.play();
  }

  score = 0 
  document.getElementById("scoreText").innerHTML= "Score : 0";

  combo = 0 
  document.getElementById("comboText").innerHTML= "Current Combo : 0";

  highestCombo = 0 
  document.getElementById("comboText1").innerHTML= "Highest Combo : 0";

  difficulty = notPress[2]
});

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

function changeBtn1a (){
  if ((!keys.space.pressed && 
    (rectangles[0].x >= 0 && rectangles[0].x >= difficulty) ||
    (rectangles[1].x >= 0 && rectangles[1].x >= difficulty) ||
    (rectangles[2].x >= 0 && rectangles[2].x >= difficulty) ||
    (rectangles[3].x >= 0 && rectangles[3].x >= difficulty) ||
    (rectangles[4].x >= 0 && rectangles[4].x >= difficulty) ||
    (rectangles[5].x >= 0 && rectangles[5].x >= difficulty)
  )){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;

    combo = 0
    document.getElementById("comboText").innerHTML= "Current Combo : 0";
  }
}

function changeBtn1() {
  const btn1 = document.getElementById("btn1");
  btn1.style.backgroundColor = "#ffb1e8";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.space.pressed && (
    (rectangles[0].x >= 0 && rectangles[0].x > 263)||
    (rectangles[1].x >= 0 && rectangles[1].x > 263)||
    (rectangles[2].x >= 0 && rectangles[2].x > 263)||
    (rectangles[3].x >= 0 && rectangles[3].x > 263)||
    (rectangles[4].x >= 0 && rectangles[4].x > 263)||
    (rectangles[5].x >= 0 && rectangles[5].x > 263)
  )){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;

    combo += 1
    document.getElementById("comboText").innerHTML= "Current Combo : " + combo;

    if (combo > highestCombo) {
      highestCombo = combo;
      document.getElementById("comboText1").innerHTML = "Highest Combo : " + highestCombo;
    }

    if((rectangles[0].x >= 0 && rectangles[0].x > 263)){
      rectangles[0].x = getRandomX()
    }

    if((rectangles[1].x >= 0 && rectangles[1].x > 263)){
      rectangles[1].x = getRandomX()
    }

    if((rectangles[2].x >= 0 && rectangles[2].x > 263)){
      rectangles[2].x = getRandomX()
    }

    if((rectangles[3].x >= 0 && rectangles[3].x > 263)){
      rectangles[3].x = getRandomX()
    }

    if((rectangles[4].x >= 0 && rectangles[4].x > 263)){
      rectangles[4].x = getRandomX()
    }

    if((rectangles[5].x >= 0 && rectangles[5].x > 263)){
      rectangles[5].x = getRandomX()
    }
  } 
  else if (keys.space.pressed && 
    document.getElementById("menu").style.display == 'none' &&
    document.getElementById("endgame").style.display == 'none' && (
    (rectangles[0].x != (rectangles[0].x >= 0 && rectangles[0].x > 263))||
    (rectangles[1].x != (rectangles[1].x >= 0 && rectangles[1].x > 263))||
    (rectangles[2].x != (rectangles[2].x >= 0 && rectangles[2].x > 263))||
    (rectangles[3].x != (rectangles[3].x >= 0 && rectangles[3].x > 263))||
    (rectangles[4].x != (rectangles[4].x >= 0 && rectangles[4].x > 263))||
    (rectangles[5].x != (rectangles[5].x >= 0 && rectangles[5].x > 263))
  )){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;

    combo = 0
    document.getElementById("comboText").innerHTML= "Current Combo : 0";
  }
}

function menu(){
  const btn1 = document.getElementById('menu');
  const btn2 = document.getElementById('endgame');
  btn1.style.display = "none";
  btn2.style.display = "none";
  if (keys.shift.pressed) {
    var mediumButton = document.getElementById("medium");
    if (mediumButton) {
      mediumButton.click();
    }
  }
}

function gameLoop() {
  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  updateRectangles();
  drawRectangles();
  requestAnimationFrame(gameLoop);

  changeBtn1a(); 
}
gameLoop();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case ' ':
            keys.space.pressed = true;
            changeBtn1();
            break;
        case 'Shift':
            keys.shift.pressed = true;
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

var myAudio = document.getElementById("audio");
myAudio.addEventListener("ended", function() {
    rectangles[0].x = -20;
    rectangles[1].x = -60;
    rectangles[2].x = -100;
    rectangles[3].x = -140;
    rectangles[4].x = -180;
    rectangles[5].x = -220; 
    gravity = 0
    document.getElementById("endgame").style.display = "flex"; 
});