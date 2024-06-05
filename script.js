document.addEventListener('DOMContentLoaded', function() {
    var photos = document.querySelectorAll('.photo');

    photos.forEach(function(photo) {
        var closeButton = photo.querySelector('.close-btn');
        photo.addEventListener('click', function() {
            toggleFullScreen(photo);
        });
        closeButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents photo click event from firing
            closeFullScreen();
        });
    });

    function toggleFullScreen(photo) {
        if (!document.fullscreenElement) {
            photo.requestFullscreen();
        }
    }

    function closeFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});
