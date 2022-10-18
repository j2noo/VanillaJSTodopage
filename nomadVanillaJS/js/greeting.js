const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSubmitLoginForm(event) {
  event.preventDefault();
  const username = loginInput.value;
  console.log(USERNAME_KEY);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username);
  showGreeting(username);
}
function showGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
  //show form
  console.log('zz');

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onSubmitLoginForm);

}
else {
  //show greeting
  console.log(savedUserName);
  showGreeting(savedUserName);
  

}