
const registerButton = document.getElementById("registerButton");
const message = document.getElementById("message");

registerButton.addEventListener("click", () => {
  message.textContent = "Registration started successfully!";
});
