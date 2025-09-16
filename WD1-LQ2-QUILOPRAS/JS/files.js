// Like, Comment, Share buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".post-actions button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert(`You clicked: ${button.innerText}`);
    });
  });

  // Signup form submit
  const signupForm = document.querySelector("#signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Account created successfully!");
      signupForm.reset();
    });
  }

  // Settings form submit
  const settingsForm = document.querySelector("#settings-form");
  if (settingsForm) {
    settingsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("⚙️ Settings saved!");
    });
  }
});
