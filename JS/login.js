const form = document.querySelector("form");

const emailInput = document.querySelector("#exampleInputEmail1");

const passwordInput = document.querySelector("#exampleInputPassword1");

const errorElement = document.querySelector(".error");

const successElement = document.querySelector(".success");

function checkUser(email, password) {
  const user = localStorage.getItem(email);

  if (user) {
    const userData = JSON.parse(user);

    if (userData.password === password) {
      return userData;
    }
  }

  return null;
}

function handleSubmit(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  const password = passwordInput.value.trim();

  if (email && password) {
    const user = checkUser(email, password);

    if (user) {
      successElement.textContent = "Login successful!";

      errorElement.textContent = "";
      localStorage.setItem("isLoggedIn", true);

      window.location.href = "home.html";
    } else {
      errorElement.textContent = "Invalid email or password";

      successElement.textContent = "";
    }
  } else {
    errorElement.textContent = "Please fill in both fields";

    successElement.textContent = "";
  }
}

form.addEventListener("submit", handleSubmit);
