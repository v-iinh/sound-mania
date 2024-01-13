const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let score = 0;
let combo = 0;
let highestCombo = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rectangles = [
  { x: 135, y: 390, color: "#ff5d5d", size: 200, teleporting: false, teleportDelay: 1000 },
  { x: 390, y: 390, color: "#6ad1fe", size: 200, teleporting: false, teleportDelay: 1500 },
  { x: 650, y: 390, color: "#23cf57", size: 200, teleporting: false, teleportDelay: 2000 },
  { x: 905, y: 390, color: "#fe781f", size: 200, teleporting: false, teleportDelay: 2500 },
  { x: 1150, y: 390, color: "#fffc5d", size: 200, teleporting: false, teleportDelay: 3000 },
  { x: 1400, y: 390, color: "#965dff", size: 200, teleporting: false, teleportDelay: 3500 }
];

document.getElementById("easy").addEventListener("click", function() {
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

  rectangles[0].x = 135;
  rectangles[1].x = 390;
  rectangles[2].x = 650;
  rectangles[3].x = 906;
  rectangles[4].x = 1150;
  rectangles[5].x = 1400;

  rectangles[0].y = 390;
  rectangles[1].y = 390;
  rectangles[2].y = 390;
  rectangles[3].y = 390;
  rectangles[4].y = 390;
  rectangles[5].y = 390;

  rectangles[0].size = 200;
  rectangles[1].size = 200;
  rectangles[2].size = 200;
  rectangles[3].size = 200;
  rectangles[4].size = 200;
  rectangles[5].size = 200;

  rectangles[0].teleporting = false;
  rectangles[1].teleporting = false;
  rectangles[2].teleporting = false;
  rectangles[3].teleporting = false;
  rectangles[4].teleporting = false;
  rectangles[5].teleporting = false;

  rectangles[0].teleportDelay = 2000;
  rectangles[1].teleportDelay = 2500;
  rectangles[2].teleportDelay = 3000;
  rectangles[3].teleportDelay = 3500;
  rectangles[4].teleportDelay = 4000;
  rectangles[5].teleportDelay = 4500;
});

document.getElementById("medium").addEventListener("click", function() {
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

  rectangles[0].x = 135;
  rectangles[1].x = 390;
  rectangles[2].x = 650;
  rectangles[3].x = 906;
  rectangles[4].x = 1150;
  rectangles[5].x = 1400;

  rectangles[0].y = 390;
  rectangles[1].y = 390;
  rectangles[2].y = 390;
  rectangles[3].y = 390;
  rectangles[4].y = 390;
  rectangles[5].y = 390;

  rectangles[0].size = 200;
  rectangles[1].size = 200;
  rectangles[2].size = 200;
  rectangles[3].size = 200;
  rectangles[4].size = 200;
  rectangles[5].size = 200;

  rectangles[0].teleporting = false;
  rectangles[1].teleporting = false;
  rectangles[2].teleporting = false;
  rectangles[3].teleporting = false;
  rectangles[4].teleporting = false;
  rectangles[5].teleporting = false;

  rectangles[0].teleportDelay = 1000;
  rectangles[1].teleportDelay = 1500;
  rectangles[2].teleportDelay = 2000;
  rectangles[3].teleportDelay = 2500;
  rectangles[4].teleportDelay = 3000;
  rectangles[5].teleportDelay = 3500;
});

document.getElementById("hard").addEventListener("click", function() {
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

  rectangles[0].x = 135;
  rectangles[1].x = 390;
  rectangles[2].x = 650;
  rectangles[3].x = 906;
  rectangles[4].x = 1150;
  rectangles[5].x = 1400;

  rectangles[0].y = 390;
  rectangles[1].y = 390;
  rectangles[2].y = 390;
  rectangles[3].y = 390;
  rectangles[4].y = 390;
  rectangles[5].y = 390;

  rectangles[0].size = 200;
  rectangles[1].size = 200;
  rectangles[2].size = 200;
  rectangles[3].size = 200;
  rectangles[4].size = 200;
  rectangles[5].size = 200;

  rectangles[0].teleporting = false;
  rectangles[1].teleporting = false;
  rectangles[2].teleporting = false;
  rectangles[3].teleporting = false;
  rectangles[4].teleporting = false;
  rectangles[5].teleporting = false;

  rectangles[0].teleportDelay = 0;
  rectangles[1].teleportDelay = 500;
  rectangles[2].teleportDelay = 1000;
  rectangles[3].teleportDelay = 1500;
  rectangles[4].teleportDelay = 2000;
  rectangles[5].teleportDelay = 2500;
});

function drawRectangles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rectangles.forEach(rectangle => {
    const { x, y, size, teleporting, color } = rectangle;

    if (teleporting) {
      ctx.fillStyle = color;
    } else {
      ctx.fillStyle = 'transparent';
    }

    const halfSize = size / 2;
    ctx.fillRect(x - halfSize, y - halfSize, size, size);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.strokeRect(x - halfSize, y - halfSize, size, size);
  });
}

function checkCollision(newRectangle) {
  return rectangles.some(rectangle => {
    return (
      newRectangle.x < rectangle.x + rectangle.size &&
      newRectangle.x + newRectangle.size > rectangle.x &&
      newRectangle.y < rectangle.y + rectangle.size &&
      newRectangle.y + newRectangle.size > rectangle.y
    );
  });
}

function shrinkRectangle(rectangle) {
  rectangle.size -= 4;
  if (rectangle.size < 100) {
    rectangle.size = 100;
    teleportRectangle(rectangle);
  } else {
    setTimeout(() => {
      shrinkRectangle(rectangle);
    }, 25);
  }
}

function teleportRectangle(rectangle) {
  rectangle.teleporting = true;

  setTimeout(() => {
    rectangle.size = 100;

    const newRectangle = {
      x: Math.random() * (canvas.width - rectangle.size) + rectangle.size / 2,
      y: Math.random() * (canvas.height - rectangle.size) + rectangle.size / 2,
      size: 200,
      teleporting: false,
      color: rectangle.color,
      teleportDelay: rectangle.teleportDelay
    };

    while (checkCollision(newRectangle)) {
      newRectangle.x = Math.random() * (canvas.width - newRectangle.size) + newRectangle.size / 2;
      newRectangle.y = Math.random() * (canvas.height - newRectangle.size) + newRectangle.size / 2;
    }

    Object.assign(rectangle, newRectangle);
  }, rectangle.teleportDelay);
}

function teleportRectangles() {
  rectangles.forEach(rectangle => {
    shrinkRectangle(rectangle);
  });

  drawRectangles();
}

setInterval(teleportRectangles, 2000);

function update() {
  drawRectangles();
  requestAnimationFrame(update);
}


canvas.addEventListener('click', handleClick);
function handleClick(event) {
  const clickX = event.clientX - canvas.getBoundingClientRect().left;
  const clickY = event.clientY - canvas.getBoundingClientRect().top;

  let clickedOnSquare = false;

  rectangles.forEach(rectangle => {
    const { x, y, size } = rectangle;
    const halfSize = size / 2;

    if (
      clickX > x - halfSize &&
      clickX < x + halfSize &&
      clickY > y - halfSize &&
      clickY < y + halfSize &&
      size === 100
    ) {
      score += 10
      document.getElementById("scoreText").innerHTML= "Score : " + score;
  
      combo += 1
      document.getElementById("comboText").innerHTML= "Current Combo : " + combo;
      if (combo > highestCombo) {
        highestCombo = combo;
        document.getElementById("comboText1").innerHTML = "Highest Combo : " + highestCombo;
      }
      clickedOnSquare = true;
    }
  });

  if (!clickedOnSquare) {
    score -= 10
    document.getElementById("scoreText").innerHTML= "Score : " + score;

    combo = 0
    document.getElementById("comboText").innerHTML= "Current Combo : " + combo;
  }
}
update();

function hideMenu() {
  const btn1 = document.getElementById('menu');
  const btn2 = document.getElementById('endgame');
  btn1.style.display = "none";
  btn2.style.display = "none";
  var mediumButton = document.getElementById("medium");
  if (mediumButton) {
    mediumButton.click();
  }
}

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
  document.getElementById("endgame").style.display = "flex"; 
});