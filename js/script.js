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
