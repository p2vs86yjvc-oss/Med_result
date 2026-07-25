document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const error = document.getElementById("error");
    const image = document.getElementById("resultImage");

    if (username === "GK20230505" && password === "2023050") {
        error.textContent = "";
        image.style.display = "block";
    } else {
        image.style.display = "none";
        error.textContent = "Invalid Username or Password";
    }
});
