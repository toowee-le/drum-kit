window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running all together
    audio.currentTime = 0; // Add property to return audio playback time to the start
    audio.play(); // Play method to play the audio
});