window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stop the function from running all together
    audio.currentTime = 0; // Add property to return audio playback time to the start
    audio.play(); // Play method to play the audio
    key.classList.add('playing');

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // Skip it if it's not transform
        this.classList.remove('playing'); // Removes the playing class
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // Listen for a transition event on each key

});