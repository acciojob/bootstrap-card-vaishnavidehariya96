
// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Bootstrap Card Page Loaded ✅");

  // Select all Read More buttons
  const buttons = document.querySelectorAll(".btn");

  // Add event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // prevent link reload
      alert("You clicked: " + button.innerText);
      console.log("Button clicked:", button.innerText);
    });
  });
});
