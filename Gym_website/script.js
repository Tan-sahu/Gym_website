document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll("a.nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact Form Submission Alert
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent successfully!");
    });
});
