document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("homeVideo");
    const muteButton = document.getElementById("muteButton");
    const pauseButton = document.getElementById("pauseButton");
    const normalSpeedButton = document.getElementById("normalSpeedButton");
    const slowMoButtonHalf = document.getElementById("slowMoButtonHalf");
    const slowMoButtonQuarter = document.getElementById("slowMoButtonQuarter");
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    const exitFullscreenButton = document.querySelector(".exit-fullscreen");
  
    // Play video on load without being muted
    video.muted = false;
    video.play();
  
    // Mute/Unmute video when mute button is clicked
    muteButton.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
      } else {
        video.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
      }
    });
  
    // Pause/Play button functionality
    pauseButton.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        pauseButton.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        video.pause();
        pauseButton.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  
    // Change video speed to normal
    normalSpeedButton.addEventListener("click", function () {
      video.playbackRate = 1.0;
    });
  
    // Change video speed to 0.5x
    slowMoButtonHalf.addEventListener("click", function () {
      video.playbackRate = 0.5;
    });
  
    // Change video speed to 0.25x
    slowMoButtonQuarter.addEventListener("click", function () {
      video.playbackRate = 0.25;
    });
  
    // Scroll to top functionality
    scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Exit fullscreen
    exitFullscreenButton.addEventListener("click", function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  });
  