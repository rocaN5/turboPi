// Настройка canvas
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Слушатель изменения размера окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Функция создания случайного числа между min и max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Класс для частиц
class Particle {
    constructor() {
        this.size = random(2, 6);
        this.x = random(0, canvas.width);
        this.y = -this.size;
        this.opacity = random(0.3, 1);
        this.speedY = random(1, 3);
        this.color = '#fff66d'; 
        this.colorChange = '#ffa92e';
        this.duration = random(4000, 12000);
        this.startTime = Date.now();
    }

    update() {
        const elapsed = Date.now() - this.startTime;
        const progress = Math.min(elapsed / this.duration, 1);
        this.y += this.speedY;
        if (progress >= 1) {
            this.y = canvas.height + this.size; // Удалить частицу
        } else {
            this.color = this.interpolateColor('#fff66d', '#ffa92e', progress);
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
    }

    interpolateColor(color1, color2, factor) {
        const c1 = this.hexToRgb(color1);
        const c2 = this.hexToRgb(color2);
        const r = Math.round(c1.r + factor * (c2.r - c1.r));
        const g = Math.round(c1.g + factor * (c2.g - c1.g));
        const b = Math.round(c1.b + factor * (c2.b - c1.b));
        return `rgb(${r},${g},${b})`;
    }

    hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }
}

// Массив частиц
const particles = [];

// Функция обновления анимации
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.y > canvas.height + particle.size) {
            particles.splice(index, 1); // Удалить частицу
        }
    });
    requestAnimationFrame(animate);
}

// Переодичность создания частиц
setInterval(() => {
    particles.push(new Particle());
}, 100);

// Начать анимацию
animate();