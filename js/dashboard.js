// js/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const storyId = event.target.dataset.storyId;
            if (storyId) {
                // Arahkan ke halaman game dengan ID cerita sebagai parameter URL
                window.location.href = `game.html?story=${storyId}`;
            }
        });
    });
});