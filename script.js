document.addEventListener('DOMContentLoaded', function() {
    var photos = document.querySelectorAll('.photo');

    photos.forEach(function(photo) {
        var closeButton = photo.querySelector('.close-btn');
        closeButton.addEventListener('click', function() {
            closeFullScreen();
        });
    });

    function closeFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});
