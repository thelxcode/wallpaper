document.addEventListener('DOMContentLoaded', function() {
    var wallpapers = document.querySelectorAll('.wallpaper img');

    wallpapers.forEach(function(wallpaper) {
        wallpaper.addEventListener('click', function() {
            toggleFullScreen(this);
        });
    });

    function toggleFullScreen(image) {
        if (!document.fullscreenElement) {
            image.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
});
