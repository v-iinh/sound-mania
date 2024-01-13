const keys = {
    enter: {
        pressed: false
    }
};

function enterKey() {
    if (keys.enter.pressed) {
        document.getElementById("before").style.display = "none";
        document.getElementById("container").style.display = "flex";
        document.getElementById("subText1").style.display = "block";
    }
}

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'Enter':
            keys.enter.pressed = true;
            enterKey();
            break;
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'Enter':
            keys.enter.pressed = false;
            break;
    }
});
