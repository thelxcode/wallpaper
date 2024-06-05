document.addEventListener('DOMContentLoaded', function() {
    var wallpapers = document.querySelectorAll('.wallpaper');

    wallpapers.forEach(function(wallpaper) {
        wallpaper.addEventListener('click', function() {
            toggleFullScreen();
        });
    });

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
});
