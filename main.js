// const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

// window.addEventListener("scroll", function () {
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionX = offset * -0.3 - 100 + "px";
// });

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    offset -= 3100;
    parallax1.style.backgroundPositionY = offset * 0.1 + "px";
});

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    offset -= 4800;
    // parallax2.style.backgroundPositionY = offset*(-0.1) + "px";
});

function myFunction() {
    document.getElementById("check").checked = false;
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    const videoContainer = document.querySelector(".video-container");
    const exitFullscreenButton = document.querySelector('.exit-fullscreen');
    let isFullscreen = false;
    let scrolledPastVideo = false;

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0; // 150

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }

        // Apply only on mobile
        if (window.innerWidth <= 600) {
            if (window.scrollY > 50 && !isFullscreen && !scrolledPastVideo) {
                videoContainer.classList.add("fullscreen");
                isFullscreen = true;
                exitFullscreenButton.style.display = 'block';
            } else if (window.scrollY > 200 && isFullscreen && !scrolledPastVideo) {
                videoContainer.classList.remove("fullscreen");
                isFullscreen = false;
                scrolledPastVideo = true;
                exitFullscreenButton.style.display = 'none';
                // // Ensuring that the video is not fullscreen
                // setTimeout(() => {
                //     window.scrollBy(0, 1);
                // }, 0);
            } else if (window.scrollY <= 50 && isFullscreen && scrolledPastVideo) {
                videoContainer.classList.remove("fullscreen");
                isFullscreen = false;
                scrolledPastVideo = false;
                exitFullscreenButton.style.display = 'none';
            }
        }
    }
}

window.addEventListener("scroll", reveal);

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".entourage-section");

    sections.forEach((section, index) => {
        section.addEventListener("wheel", (event) => {
            if (event.deltaY > 0 && index < sections.length - 1) {
                sections[index + 1].scrollIntoView({ behavior: "smooth" });
            } else if (event.deltaY < 0 && index > 0) {
                sections[index - 1].scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const exitFullscreenButton = document.querySelector('.exit-fullscreen');
    exitFullscreenButton.onclick = function() {
        const videoContainer = document.querySelector('.video-container');
        videoContainer.classList.remove('fullscreen');
        window.scrollTo(0, 0); // Scroll to top
        exitFullscreenButton.style.display = 'none';
    };
});

// Mute/unmute video functionality
const muteButton = document.getElementById("muteButton");
const homeVideo = document.getElementById("homeVideo");

muteButton.onclick = function () {
    if (homeVideo.muted) {
        homeVideo.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        homeVideo.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
};

// Modal functionality
var modal = document.getElementById("blessUsModal");
var btn = document.getElementById("blessUsBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Carousel functionality
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

showItem(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}, 3000);
