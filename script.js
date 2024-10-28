const startButton = document.getElementById('startButton');
const player = document.getElementById('player');
const backgroundMusic = document.getElementById('backgroundMusic');
let gameStarted = false;

// Start game when button is clicked
startButton.addEventListener('click', () => {
    if (!gameStarted) {
        backgroundMusic.play();
        gameStarted = true;
        startButton.style.display = 'none';
        window.requestAnimationFrame(updatePlayerPosition);
    }
});

// Move player with arrow keys
document.addEventListener('keydown', (event) => {
    const step = 10; // pixels to move
    const playerRect = player.getBoundingClientRect();
    switch (event.key) {
        case 'ArrowUp':
            if (playerRect.top > 0) player.style.top = `${player.offsetTop - step}px`;
            break;
        case 'ArrowDown':
            if (playerRect.bottom < window.innerHeight) player.style.top = `${player.offsetTop + step}px`;
            break;
        case 'ArrowLeft':
            if (playerRect.left > 0) player.style.left = `${player.offsetLeft - step}px`;
            break;
        case 'ArrowRight':
            if (playerRect.right < window.innerWidth) player.style.left = `${player.offsetLeft + step}px`;
            break;
    }
});

// Update player position (for continuous movement or animations)
function updatePlayerPosition() {
    if (gameStarted) {
        // Update player position or handle animations here
        window.requestAnimationFrame(updatePlayerPosition);
    }
}
