// ==========================================
// 1. CONTROLE DE TEMA (DESIGN TOKENS)
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Ativar Dark Mode Neon';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Voltar para Light Mode';
    }
});

// ==========================================
// 2. GERAÇÃO DAS PARTÍCULAS NO PLANO DE FUNDO
// ==========================================
const backgroundCanvas = document.getElementById('background-canvas');
const totalParticles = 80; 
const colorClasses = ['c1', 'c2', 'c3', 'c4', 'c5'];

function createParticles() {
    for (let i = 0; i < totalParticles; i++) {
        const particle = document.createElement('div');
        
        const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        particle.classList.add('particle', randomColor);
        
        const size = Math.random() * 30 + 15;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.left = `${Math.random() * 100}vw`;
        
        particle.style.animationDuration = `${Math.random() * 7 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        backgroundCanvas.appendChild(particle);
    }
}

createParticles();