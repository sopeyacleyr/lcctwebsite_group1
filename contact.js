document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formResponse = document.getElementById("formResponse");

    formResponse.classList.remove("hidden");
    formResponse.style.color = "#004080";

    setTimeout(() => {
        formResponse.classList.add("hidden");
        this.reset();
    }, 5000); 
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
