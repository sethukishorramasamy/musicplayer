const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const playlist = document.querySelectorAll('.playlist a');
const currentSong = document.getElementById('current-song');
const currentSongPlayer = document.getElementById('current-song-player');
const fullscreenButton = document.getElementById('fullscreen-button');

audioPlayer.addEventListener('loadeddata', () => {
    playButton.addEventListener('click', () => {
        audioPlayer.play();
    });

    pauseButton.addEventListener('click', () => {
        audioPlayer.pause();
    });

    fullscreenButton.addEventListener('click', () => {
        if (audioPlayer.mozRequestFullScreen) {
            audioPlayer.mozRequestFullScreen();
        } else if (audioPlayer.webkitRequestFullscreen) {
            audioPlayer.webkitRequestFullscreen();
        } else if (audioPlayer.msRequestFullscreen) {
            audioPlayer.msRequestFullscreen();
        }
    });
});

playlist.forEach((song, index) => {
    song.addEventListener('click', (e) => {
        e.preventDefault();
        audioPlayer.src = e.target.getAttribute('href', 'button');
        audioPlayer.load();
        audioPlayer.play();
        currentSong.textContent = e.target.textContent;
        currentSongPlayer.textContent = e.target.textContent;

        playlist.forEach(item => item.classList.remove('active'));

        e.target.classList.add('active');
    });
});
