// Disable right-click, select, drag
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("dragstart", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && ["u", "U", "s", "S"].includes(e.key)) e.preventDefault();
  if (e.key === "F12") e.preventDefault();
});

// Floating hearts animation
const heartsContainer = document.querySelector(".hearts");
function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = Math.random() > 0.5 ? "💗" : "✨";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = duration + "s";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 400);

// Sparkle burst on button click
document.getElementById("buyBtn").addEventListener("click", (e) => {
  const sparkle = document.createElement("span");
  sparkle.textContent = "✨";
  sparkle.className = "sparkle";
  sparkle.style.position = "fixed";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  sparkle.style.fontSize = "20px";
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
  alert("Yay! Your early bird access will open soon 🩷");
});

// Typing animation for hero title
const heroTexts = [
  "Find Your Match 💕",
  "Meet New Friends 🌸",
  "Start Your Story ✨",
  "UpDating Your Life ❤️"
];

let tIndex = 0;
let tChar = 0;
const typingSpeed = 100;
const eraseSpeed = 50;
const pause = 1500;
const heroEl = document.getElementById("typewriterText");

function typeHero() {
  if (tChar < heroTexts[tIndex].length) {
    heroEl.textContent += heroTexts[tIndex].charAt(tChar);
    tChar++;
    setTimeout(typeHero, typingSpeed);
  } else {
    setTimeout(eraseHero, pause);
  }
}

function eraseHero() {
  if (tChar > 0) {
    heroEl.textContent = heroTexts[tIndex].substring(0, tChar - 1);
    tChar--;
    setTimeout(eraseHero, eraseSpeed);
  } else {
    tIndex = (tIndex + 1) % heroTexts.length;
    setTimeout(typeHero, 400);
  }
}

window.addEventListener("load", typeHero);
