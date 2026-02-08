const textEl = document.getElementById("text");
const text = textEl.innerText;
textEl.innerHTML = "";
const chars = [];
[...text].forEach(letter => {
const span = document.createElement("span");
span.className = "char";
span.innerText = letter === " " ? "" : letter;
textEl.appendChild(span);
chars.push({
el: span,
x: 0,
y: 0
});
});
let mouse = { x: -9999, y: -9999 };
document.addEventListener("mousemove", e => {
mouse.x = e.clientX;
mouse.y = e.clientY;
});
function animate() {
chars.forEach(char => {
const rect = char.el.getBoundingClientRect();
const cx = rect.left + rect.width / 2;
const cy = rect.top + rect.height / 2;
const dx = mouse.x - cx;
const dy = mouse.y - cy;
const dist = Math.sqrt(dx * dx + dy * dy);
const force = Math.max(0, 150 - dist) / 150;
char.x += dx * force * 0.08;
char.y += dy * force * 0.08;
char.x *= 0.75;
char.y *= 0.75;
char.el.style.transform = `translate(${char.x}px, ${char.y}px)`;
char.el.classList.toggle("active", force > 0);
});
requestAnimationFrame(animate);
}
animate();