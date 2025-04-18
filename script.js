var form = document.getElementById("registrationform")
var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passwordError = document.getElementById("passwordError")

function validateName (){
    if(nameInput.value === ""){
        nameError.textContent = "Name Cannot Be Empty"
        return false
    }else{
        nameError.textContent = ""
        return true
    }
}

function validatePassword (){
    if(passwordInput.value.length < 6){
        passwordInput.textContent = "Password must contain 6 characters"
    }else{
        passwordInput.textContent = ""
    }
}

function validateEmail (){
    if(emailInput.value ){
        emailInput.textContent = "Please enter Valid Email"
    }else{
        emailInput.textContent = ""
    }
}

function validateForm (){
    var isValidName = validateName();
    var isValidEmail = validateEmail();
    var isValidPassword = validatePassword();
    submit.disabled = !(isNameValid && isEmailValid && isPasswordValid);
} 

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission
  alert("Form submitted successfully!");
});

