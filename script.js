
const texts = [
  "B.Tech CSE (AI/ML) @ GITAM",
  "AI/ML Engineer 🚀",
  "Software Engineer 💻",
  "Programmer | Problem Solver ⚡"
];
let count = 0, index = 0, currentText = "", letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 120);
  }
})();
