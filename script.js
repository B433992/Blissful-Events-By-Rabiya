// Video Hover Play
document.querySelectorAll("video").forEach(video => {

    video.addEventListener("mouseover", () => {
        video.play();
    });

    video.addEventListener("mouseout", () => {
        video.pause();
    });

    video.addEventListener("click", () => {
        if(video.requestFullscreen){
            video.requestFullscreen();
        }
    });

});

// Scroll Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section, .service-box, .gallery div, .video-box")
.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});