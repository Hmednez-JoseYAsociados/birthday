const digitInputs = document.querySelectorAll(".digit");
const checkButton = document.getElementById("checkButton");
const successMessage = document.getElementById("successMessage");

const correctCode = "170523";

checkButton.addEventListener("click", () => {
  const enteredCode = Array.from(digitInputs).map(input => input.value).join("");
  if (enteredCode === correctCode) {
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "birthday.html";
    }, 2000);
  }
});