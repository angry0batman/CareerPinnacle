// Wait for the page to fully load
window.addEventListener('load', function() {
    // Delay showing the text overlay after 2 seconds
    setTimeout(function() {
        var textOverlay = document.getElementById('textOverlay');
        textOverlay.style.opacity = '1';
    }, 20000); // Adjust this delay as needed
});