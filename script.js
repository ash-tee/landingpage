
const coverBox = document.querySelector(".cover-box");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
registerLink.addEventListener( "click", (event) => 
{ event.preventDefault();
  coverBox.classList.add("show-register");

});
// When the Login link in the register panel is clicked,
// remove "show-register" so the login panel appears again.
loginLink.addEventListener("click", (event) => {
    event.preventDefault();
    coverBox.classList.remove("show-register");
});
