function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.animation');

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);

            if (isVisible) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Initial check on page load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);

            if (isVisible) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Initial check on page load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});