document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("background-video");
    const videoContainer = document.getElementById("video-container");
    const mainTitle = document.getElementById("main-title");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    gsap.registerPlugin(ScrollTrigger);

    // Play the video
    video.play();

    // Hamburger menu functionality
    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden"); // Toggle the "hidden" class
    });

    // GSAP animations
    gsap.timeline({
        scrollTrigger: {
            trigger: "#video-container",
            start: "top top",
            end: "bottom center",
            scrub: true,
            pin: true,
        }
    })
    .to(videoContainer, {
        scale: 0.7,
        opacity: 0.5,
        
        rotationX:30,
        yoyo:true,
        filter: "blur(8px)", // Partially blur video
        ease: "power2.inOut",
        duration: 5
    })
    .to(mainTitle, {
        opacity: 0,
        scale:1.1,
        y: 0,
        ease: "power2.inOut",
        duration: 8
    }, 0)
    .from(textSection, {
        opacity: 0,
        y: 60,
        ease: "power2.inOut",
        duration: 15
    }, 0);
});