// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(164, 204, 92, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Enhanced crypto coin animation
const cryptoCoin = document.querySelector('.crypto-coin');
let rotationY = 0;

function animateCoin() {
    rotationY += 1;
    cryptoCoin.style.transform = `translateY(${Math.sin(Date.now() * 0.002) * 10}px) rotateY(${rotationY}deg)`;
    requestAnimationFrame(animateCoin);
}

if (cryptoCoin) {
    animateCoin();
}

// Cannabis-themed particle effect
function createCannabisParticle() {
    const particle = document.createElement('div');
    particle.className = 'cannabis-particle';
    particle.innerHTML = '🌿';
    particle.style.cssText = `
        position: fixed;
        pointer-events: none;
        font-size: ${Math.random() * 20 + 10}px;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        opacity: 0.7;
        z-index: 1;
        animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
    `;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 7000);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles occasionally
setInterval(createCannabisParticle, 3000);

// Feature cards hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Roadmap items animation on scroll
const roadmapItems = document.querySelectorAll('.roadmap-item');

function checkRoadmapAnimation() {
    roadmapItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
}

// Initial state for roadmap items
roadmapItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', checkRoadmapAnimation);
checkRoadmapAnimation(); // Check on load

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        if (this.classList.contains('btn-primary')) {
            this.style.background = 'linear-gradient(135deg, #8fb345 0%, #A4CC5C 100%)';
        }
    });

    button.addEventListener('mouseleave', function() {
        if (this.classList.contains('btn-primary')) {
            this.style.background = 'linear-gradient(135deg, #A4CC5C 0%, #8fb345 100%)';
        }
    });
});

// Community links hover effect
document.querySelectorAll('.community-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add cannabis-themed cursor trail
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function createCursorTrail() {
    const trail = document.createElement('div');
    trail.innerHTML = '🌿';
    trail.style.cssText = `
        position: fixed;
        left: ${mouseX}px;
        top: ${mouseY}px;
        pointer-events: none;
        font-size: 12px;
        opacity: 0.8;
        z-index: 9999;
        animation: trailFade 1s ease-out forwards;
    `;

    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 1000);
}

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        from {
            opacity: 0.8;
            transform: scale(1);
        }
        to {
            opacity: 0;
            transform: scale(0.5);
        }
    }
`;
document.head.appendChild(trailStyle);

// Create cursor trail occasionally
setInterval(createCursorTrail, 200);