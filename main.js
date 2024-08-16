document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const video = document.getElementById("homeVideo");
    const rsvpButton = document.getElementById("rsvpButton");
  
    // // Initially hide the RSVP button
    // rsvpButton.style.display = "none";
  
    // Show play button only on mobile
    if (window.innerWidth <= 768) {
      playButton.style.display = "block";
    } else {
      playButton.style.display = "none";
    }
  
    // Play video when play button is clicked and show RSVP button
    playButton.addEventListener("click", function () {
      video.muted = false;
      video.play().then(() => {
        playButton.style.display = "none";
        // rsvpButton.style.display = "inline-block"; // Show RSVP button after the video starts
      }).catch(error => {
        console.error("Error playing video:", error);
      });
    });
  });
  