const form = document.querySelector("form");

const emailInput = document.querySelector("#email");

const passwordInput = document.querySelector("#password");

const errorParagraph = document.querySelector(".error");

const successPara = document.querySelector(".success");

const usernameInput = document.querySelector("#username");

console.log(emailInput, passwordInput, errorParagraph, successPara, username);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  const password = passwordInput.value.trim();

  const username = usernameInput.value;

  if (email === "" || password === "" || username == "") {
    errorParagraph.textContent = "Please fill in all fields.";

    return;
  }

  if (!validateEmail(email)) {
    errorParagraph.textContent = "Invalid email address.";

    return;
  }

  if (password.length < 8) {
    errorParagraph.textContent = "Password must be at least 8 characters long.";

    return;
  }

  let obj = {
    username,
    password,
  };

  const userDataString = JSON.stringify(obj);

  if (localStorage.getItem(email) === null) {
    localStorage.setItem(email, userDataString);

    successPara.textContent = "Data saved successfully!";

    window.location.href = "login.html";
  } else {
    errorParagraph.textContent = "User already exists";
  }

  console.log(localStorage.getItem(email));

  emailInput.value = "";

  passwordInput.value = "";

  usernameInput.value = "";
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}
