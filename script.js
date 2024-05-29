document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    const dinosaur = document.getElementById('dinosaur');
    let position = 0;

    const jumpInterval = setInterval(() => {
        if (position === 150) {
            clearInterval(jumpInterval);

            const fallInterval = setInterval(() => {
                if (position === 0) {
                    clearInterval(fallInterval);
                } else {
                    position -= 5;
                    dinosaur.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 5;
            dinosaur.style.bottom = position + 'px';
        }
    }, 20);
}
