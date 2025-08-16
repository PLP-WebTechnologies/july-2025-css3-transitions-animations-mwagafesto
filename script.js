// --- Part 2: Functions, Scope & Return Values ---

// Global scope variable
let isAnimating = false;

// Function with parameter + return
function toggleAnimation(start) {
  const box = document.getElementById("animateBox");

  if (start) {
    box.classList.add("animate");
    isAnimating = true;
    return "Animation started!";
  } else {
    box.classList.remove("animate");
    isAnimating = false;
    return "Animation stopped!";
  }
}

// Demonstrating local vs global scope
function checkStatus() {
  let statusMessage = isAnimating ? "Box is moving" : "Box is still";
  return statusMessage;
}

// --- Part 3: JS + CSS Integration ---
document.getElementById("startAnimationBtn").addEventListener("click", () => {
  console.log(toggleAnimation(true));  // starts animation
  console.log(checkStatus());
});

document.getElementById("stopAnimationBtn").addEventListener("click", () => {
  console.log(toggleAnimation(false)); // stops animation
  console.log(checkStatus());
});
