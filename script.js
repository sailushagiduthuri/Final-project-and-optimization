// Wait until the entire HTML content is fully loaded
window.addEventListener("DOMContentLoaded", function () {
  // Get the button and paragraph elements
  const showTimeBtn = document.getElementById("showTime");
  const timeDisplay = document.getElementById("timeDisplay");

  // Attach click event to the button
  showTimeBtn.addEventListener("click", function () {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    timeDisplay.textContent = "Current Time: " + timeString;
  });
});