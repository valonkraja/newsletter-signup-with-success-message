const emailEl = document.querySelector(".email");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const invalidEmail = document.querySelector(".invalid-email");
const userEmail = document.querySelector(".user-email");
const signUp = document.querySelector(".sign-up");
const success = document.querySelector(".success");
const dismiss = document.querySelector(".dismiss");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = e.target[0].value;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    console.log(email);
    userEmail.innerHTML = email;
    signUp.classList.add("hide");
    success.classList.remove("hide");
    document.querySelector("body").classList.add("success-state");
  } else {
    invalidEmail.innerHTML = "Invalid email";
  }
});

dismiss.addEventListener("click", function (e) {
  e.preventDefault();
  success.classList.add("hide");
});
