// LifeLine JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("LifeLine Loaded Successfully!");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Welcome to LifeLine!");
        });
    });
});
function login(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    alert("Login Successful!");

    window.location.href = "dashboard.html";
}
