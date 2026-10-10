const button = document.getElementById("WelcomeButton");
const message = document.getElementById("message");
button.addEventListener("click", function(){
    message.textContent = "Hello! Thank you for visiting my portfolio."
});