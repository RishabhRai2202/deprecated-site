// JavaScript code for the interactive background
const canvas = document.getElementById("interactive-bg");
const context = canvas.getContext("2d");
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = Math.random() * 5 - 2.5;
    this.speedY = Math.random() * 5 - 2.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.1) this.size -= 0.05;
  }

  draw() {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.closePath();
    context.fill();
  }
}

function createParticles(e) {
  const xPos = e.x;
  const yPos = e.y;
  const size = Math.random() * 3 + 1;
  const color = "#00ff00";

  particles.push(new Particle(xPos, yPos, size, color));
}

function animateParticles() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    if (particles[i].size <= 0.1) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

canvas.addEventListener("mousemove", createParticles);
animateParticles();
