document.addEventListener("DOMContentLoaded", () => {
    const bannerImages = [
        "lcctbanner1.jpg",
        "lcctbanner2.jpg",
        "lcctbanner3.jpg"
    ];
    let currentIndex = 0;
    const banner = document.querySelector(".event-banner img");

    // Preload images for smoother transitions
    const preloadImages = () => {
        bannerImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };
    preloadImages();

    // Create a fade transition effect
    function changeBanner() {
        banner.style.transition = "opacity 0.5s ease-in-out"; // Ensure the transition is always applied
        banner.style.opacity = 0; // Start fade out

        // Wait for the fade-out to complete before changing the image
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % bannerImages.length;
            banner.src = bannerImages[currentIndex];
            banner.alt = `Banner ${currentIndex + 1}`; // Update alt text for accessibility
            banner.style.opacity = 1; // Fade back in
        }, 500); // Matches the CSS transition timing (0.5s fade-out)
    }

    setInterval(changeBanner, 6000); // Change every 6 seconds

});
