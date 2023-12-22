const gameCanvas = document.getElementById("gameCanvas");
const gameCtx = gameCanvas.getContext("2d");
let score = 0

const keys = {
  s: {
      pressed: false
  },
  d: {
      pressed: false
  },
  f:  {
      pressed: false
  },
  j: {
      pressed: false
  },
  k: {
      pressed: false
  },
  l: {
      pressed: false
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

const rectangleWidth = 50;
const rectangleHeight = 10;
let gravity = 1.2; 

document.getElementById("easy").addEventListener("click", function() {
    gravity = .6;
});

document.getElementById("medium").addEventListener("click", function() {
    gravity = 1.2;
});

document.getElementById("hard").addEventListener("click", function() {
    gravity = 1.8;
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
    rectangle.y += rectangle.velocity;

    if (rectangle.y > gameCanvas.height - rectangleHeight) {
      rectangle.y = getRandomY();
    }
  });
}

function changeBtn1() {
  const btn1 = document.getElementById("btn1");
  btn1.style.backgroundColor = "#ff5d5d";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.s.pressed && rectangles[0].x == 0 && rectangles[0].y >= 0 && rectangles[0].y > 100){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  } 
  else if (keys.s.pressed && rectangles[0].x == 0 && rectangles[0].y != (rectangles[0].y >= 0 && rectangles[0].y > 100)){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
}

function changeBtn2() {
  const btn1 = document.getElementById("btn2");
  btn1.style.backgroundColor = "#6ad1fe";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.d.pressed && rectangles[1].x == 50 && rectangles[1].y >= 0 && rectangles[1].y > 100){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
  else if (keys.d.pressed && rectangles[1].x == 50 && rectangles[1].y != (rectangles[1].y >= 0 && rectangles[1].y > 100)){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
}

function changeBtn3() {
  const btn1 = document.getElementById("btn3");
  btn1.style.backgroundColor = "#23cf57";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.f.pressed && rectangles[2].x == 100.05 && rectangles[2].y >= 0 && rectangles[2].y > 100){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
  else if (keys.f.pressed && rectangles[2].x == 100.05 && rectangles[2].y != (rectangles[2].y >= 0 && rectangles[2].y > 100)){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
}

function changeBtn4() {
  const btn1 = document.getElementById("btn4");
  btn1.style.backgroundColor = "#fe781f";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.j.pressed && rectangles[3].x == 151 && rectangles[3].y >= 0 && rectangles[3].y > 100){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
  else if (keys.j.pressed && rectangles[3].x == 151 && rectangles[3].y != (rectangles[3].y >= 0 && rectangles[3].y > 100)){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
}

function changeBtn5() {
  const btn1 = document.getElementById("btn5");
  btn1.style.backgroundColor = "#fffc5d";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.k.pressed && rectangles[4].x == 201 && rectangles[4].y >= 0 && rectangles[4].y > 100){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
  else if (keys.k.pressed && rectangles[4].x == 201 && rectangles[4].y != (rectangles[4].y >= 0 && rectangles[4].y > 100)){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
}

function changeBtn6() {
  const btn1 = document.getElementById("btn6");
  btn1.style.backgroundColor = "#965dff";

  setTimeout(function () {
    btn1.style.backgroundColor = "black";
  }, 100);

  if(keys.l.pressed && rectangles[5].x == 251 && rectangles[5].y >= 0 && rectangles[5].y > 100){
    score += 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
  else if (keys.l.pressed && rectangles[5].x == 251 && rectangles[5].y != (rectangles[5].y >= 0 && rectangles[5].y > 100)){
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;
  }
}

function gameLoop() {
  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  updateRectangles();
  drawRectangles();
  requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener('keydown', (event) => {
  switch(event.key){
      case 's': 
          keys.s.pressed = true
          changeBtn1()
          break
      case 'd': 
          keys.d.pressed = true
          changeBtn2()
          break
      case 'f': 
          keys.f.pressed = true
          changeBtn3()
          break
      case 'j': 
          keys.j.pressed = true
          changeBtn4()
          break
      case 'k': 
          keys.k.pressed = true
          changeBtn5()
          break
      case 'l': 
          keys.l.pressed = true
          changeBtn6()
          break
  }
})

window.addEventListener('keyup', (event) => {
  switch(event.key){
      case 's': 
          keys.s.pressed = false
          break
      case 'd': 
          keys.d.pressed = false
          break
      case 'f': 
          keys.f.pressed = false
          break
      case 'j': 
          keys.j.pressed = false
          break
      case 'k': 
          keys.k.pressed = false
          break
      case 'l': 
          keys.l.pressed = false
          break
  }
})

function togglePlayPause() {
  var audio = document.getElementById("audio");
  var playPauseButton = document.getElementById("playPauseButton");
  var playPauseIcon = document.getElementById("playPauseIcon");

  if (audio.paused) {
      audio.play();
      playPauseIcon.className = "fas fa-pause";
      changeFavicon("pause.png");
  } else {
      audio.pause();
      playPauseIcon.className = "fas fa-play";
      changeFavicon("play.png");
  }
}