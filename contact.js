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
