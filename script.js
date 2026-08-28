// LOGIN

function login() {

    const name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        alert("Please enter your name ❤️");
        return;
    }

    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("desktop").style.display = "block";

    startHearts();
}


// OPEN WINDOW

function openWindow(id) {

    document.getElementById(id).style.display = "block";

    document.getElementById("startMenu").style.display = "none";
}


// CLOSE WINDOW

function closeWindow(id) {

    document.getElementById(id).style.display = "none";
}


// START MENU

function showStart() {

    const menu = document.getElementById("startMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


// SECRET

function revealSecret() {

    document.getElementById("secretMessage").style.display = "block";

    startHearts();
}


// FINAL SURPRISE

function finalSurprise() {

    document.getElementById("startMenu").style.display = "none";

    document.getElementById("finalScreen").style.display = "flex";

    startHearts();
}


// CLOSE FINAL

function closeFinal() {

    document.getElementById("finalScreen").style.display = "none";
}


// CLOCK

function updateClock() {

    const now = new Date();

    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");

    document.getElementById("clock").innerText =
        hours + ":" + minutes;
}

setInterval(updateClock, 1000);

updateClock();


// FLOATING HEARTS

function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        const hearts = ["❤️", "💕", "💖", "💗", "💓", "🌹"];

        heart.innerText =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);
}
