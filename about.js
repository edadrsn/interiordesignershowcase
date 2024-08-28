// JavaScript to add animations and interactivity

// Function to animate stats on scroll
function animateStatsOnScroll() {
    const stats = document.querySelectorAll('.stat');
    const triggerBottom = window.innerHeight * 0.8;

    stats.forEach(stat => {
        const statTop = stat.getBoundingClientRect().top;
        if (statTop < triggerBottom) {
            stat.classList.add('animate');
        } else {
            stat.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', animateStatsOnScroll);
window.addEventListener('load', animateStatsOnScroll);

// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
