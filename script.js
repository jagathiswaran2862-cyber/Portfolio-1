// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Simple welcome message
window.addEventListener("load", function() {
    console.log("Welcome to Jagathishwaran Photography Portfolio");
});