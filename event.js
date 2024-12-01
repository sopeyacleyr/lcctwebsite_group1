document.addEventListener("DOMContentLoaded", () => {
    const bannerImages = [
        "lcctbanner1.jpg",
        "lcctbanner2.jpg",
        "lcctbanner3.jpg"
    ];
    let currentIndex = 0;
    const banner = document.querySelector(".event-banner img");


    const preloadImages = () => {
        bannerImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };
    preloadImages();

    
    function changeBanner() {
        banner.style.transition = "opacity 0.5s ease-in-out";
        banner.style.opacity = 0; 

    
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % bannerImages.length;
            banner.src = bannerImages[currentIndex];
            banner.alt = `Banner ${currentIndex + 1}`; 
            banner.style.opacity = 1; 
        }, 500); 
    }

    setInterval(changeBanner, 6000); 

});


document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();
        dropdownMenu.style.display = 
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
