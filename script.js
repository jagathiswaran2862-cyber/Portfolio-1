document.addEventListener("DOMContentLoaded", () => {
    // Welcome Log
    console.log("Welcome to Jagathiswaran Photography & Design Portfolio");

    // Smooth Scroll with Header Offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky Header and Top Button on Scroll
    const header = document.querySelector('header');
    const topBtn = document.querySelector('a.top');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 60) {
            header.style.position = 'fixed';
            header.style.background = 'rgba(8, 8, 8, 0.95)';
            header.style.backdropFilter = 'blur(8px)';
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            header.style.position = 'absolute';
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
        }

        if (topBtn) {
            topBtn.style.opacity = scrollY > 400 ? '1' : '0';
            topBtn.style.transition = 'opacity 0.3s ease';
        }
    });
});