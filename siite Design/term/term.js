
// Toggle Functionality for Collapsible Sections
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;

            // Toggle content visibility
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

            // Smooth Scroll Effect
            content.scrollIntoView({ behavior: "smooth" });
        });
    });
});