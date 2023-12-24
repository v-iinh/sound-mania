const keys = {
    space: {
        pressed: false
    }
};

function spaceKey() {
    if (keys.space.pressed) {
        document.getElementById("before").style.display = "none";
        document.getElementById("container").style.display = "flex";
        document.getElementById("subText1").style.display = "block";
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