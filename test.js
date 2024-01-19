const button = document.getElementById("myButton");
let isHovered = false;


button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.transition = "all 0.5s ease";



button.addEventListener("mouseenter", () => {
  isHovered = true;
  button.style.position = "fixed";
});

button.addEventListener("mousemove", (event) => {
  if (isHovered) {
    let x = Math.round(Math.random()*500);
    let y = Math.round(Math.random()*500);
    button.style.transform = `translate(${x}px, ${y}px)`; // Apply new translation

  }
});

button.addEventListener("mouseleave", () => {
  isHovered = false;
  button.style.position = "static"; // Restore initial position (adjust if needed)
});



const yes = document.getElementById("yesbtn");

yes.addEventListener("click", () => {
    // button.style.display = "none";
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});