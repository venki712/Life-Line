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
function signup(event) {
    event.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    alert("Account Created Successfully!");

    window.location.href = "login.html";
}
const welcome = document.getElementById("welcome");

if (welcome) {
    const name = localStorage.getItem("name");

    if (name) {
        welcome.innerHTML = `Welcome Back, ${name} 👋`;
    }
}
function saveMemory(event) {
    event.preventDefault();

    const title = document.querySelector('input[type="text"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const location = document.querySelectorAll('input[type="text"]')[1].value;
    const mood = document.querySelector("select").value;
    const description = document.querySelector("textarea").value;

    const memory = {
        title,
        date,
        location,
        mood,
        description
    };

    let memories = JSON.parse(localStorage.getItem("memories")) || [];

    memories.push(memory);

    localStorage.setItem("memories", JSON.stringify(memories));

    alert("Memory Saved Successfully!");

    window.location.href = "timeline.html";
}
