// 1. Click event
document.getElementById("avatarBtn").addEventListener("click", function() {
  alert("Avatar State Activated!");
});

// 2. Hover event
let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function() {
  hoverBox.textContent = "You are a Waterbender 🌊";
  hoverBox.style.backgroundColor = "#48cae4";
});

hoverBox.addEventListener("mouseout", function() {
  hoverBox.textContent = "Hover to reveal your element";
  hoverBox.style.backgroundColor = "#90e0ef";
});

// 3. Show/hide event
let appaBox = document.getElementById("appaBox");

document.getElementById("toggleBtn").addEventListener("click", function() {
  appaBox.style.display = appaBox.style.display === "none" ? "flex" : "none";
});

// 4. Text input event
document.getElementById("nameInput").addEventListener("input", function(event) {
  document.getElementById("output").textContent =
    "Welcome to training, " + event.target.value + "!";
});

// 5. Page load event
window.addEventListener("load", function() {
  let hour = new Date().getHours();

  if (hour < 12) {
    document.getElementById("greeting").textContent = "Good morning, Avatar ☀️";
  } else if (hour < 18) {
    document.getElementById("greeting").textContent = "Good afternoon, Avatar 🔥";
  } else {
    document.getElementById("greeting").textContent = "Good evening, Avatar 🌙";
  }
});

// 6. Theme change event
document.getElementById("changeThemeBtn").addEventListener("click", function() {
  document.body.style.background = "linear-gradient(to bottom, #ffb703, #fb8500)";
  document.body.style.color = "#3a0ca3";
});