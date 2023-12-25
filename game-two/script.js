const keys = {
    space: {
        pressed: false
    }
};

function menuClick(){
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

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case ' ':
            keys.space.pressed = true;
            spaceKey();
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