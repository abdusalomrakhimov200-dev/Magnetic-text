🧲 Magnetic Text

Interactive typography animation where each letter reacts dynamically to mouse movement, creating a smooth magnetic attraction effect.

🚀 Preview

When the cursor moves near the text, each character is pulled toward it. As the cursor moves away, the letters smoothly return to their original position with a natural easing motion.

✨ Features

Real-time mouse interaction

Physics-inspired magnetic movement

Smooth animation using requestAnimationFrame()

Distance-based force calculation

Dynamic color activation

Modern dark gradient UI

No external libraries (Pure Vanilla JavaScript)

⚙️ How It Works

The text is split into individual <span> elements.

Each character tracks its center position.

The distance between the mouse and each letter is calculated:

distance = √(dx² + dy²)

If the cursor is within a 150px radius, a force value is applied.

A damping multiplier creates smooth return animation.

This approach allows every letter to behave independently and respond naturally to user interaction.

🛠 Technologies Used

HTML5

CSS3 (Flexbox, gradients, transitions)

JavaScript (DOM manipulation & vector math)

requestAnimationFrame API

📦 Installation

Clone the repository:

git clone https://github.com/your-username/magnetic-text.git

Open index.html in your browser.

No build tools or dependencies required.

💡 Use Cases

Portfolio hero sections

Creative landing pages

Interactive UI experiments

Front-end animation showcases
