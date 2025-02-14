document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.valentine-text');
    const container = document.querySelector('.container');
    const bg = document.querySelector('.background-animation');

    function animateText() {
        text.style.opacity = '0';
        text.style.transform = 'scale(0)';
        
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'scale(1)';
        }, 500);
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.opacity = Math.random();
        
        bg.appendChild(particle);
        
        setTimeout(() => particle.remove(), 5000);
    }

    animateText();
    setInterval(createParticle, 100);

    text.addEventListener('mouseover', () => {
        text.style.transform = 'scale(1.05)';
        text.style.filter = 'brightness(1.2)';
    });

    text.addEventListener('mouseout', () => {
        text.style.transform = 'scale(1)';
        text.style.filter = 'brightness(1)';
    });
});