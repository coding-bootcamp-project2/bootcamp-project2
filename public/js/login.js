const showSignupForm = () => {
  const loginCard = document.querySelector(".login-card");
  const signupCard = document.querySelector(".signup-card");

  loginCard.classList.add("hidden");
  signupCard.classList.remove("hidden");
};

const showLoginForm = () => {
  const loginCard = document.querySelector(".login-card");
  const signupCard = document.querySelector(".signup-card");

  loginCard.classList.remove("hidden");
  signupCard.classList.add("hidden");
};

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document.querySelector(".btn-signup").addEventListener("click", showSignupForm);

document.querySelector(".btn-login").addEventListener("click", showLoginForm);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
