/* =====================================================
LOGIN
===================================================== */

function login() {

const name =
    document
    .getElementById("nameInput")
    .value
    .trim();

const password =
    document
    .getElementById("passwordInput")
    .value;

/*
   CHANGE THESE VALUES
   TO YOUR SPECIAL PERSON'S
   NAME AND PASSWORD.
*/

const correctName = "Love";
const correctPassword = "1234";


if (
    name.toLowerCase() ===
    correctName.toLowerCase()
    &&
    password === correctPassword
) {

    document
    .getElementById("loginScreen")
    .style.display = "none";

    document
    .getElementById("desktop")
    .style.display = "block";

    createHearts();

} else {

    document
    .getElementById("loginError")
    .textContent =
        "Oops! ❤️ Wrong name or password.";

}

}

/* =====================================================
OPEN WINDOW
===================================================== */

function openWindow(windowId) {

document
.getElementById(windowId)
.style.display = "block";

document
.getElementById("startMenu")
.style.display = "none";

}

/* =====================================================
CLOSE WINDOW
===================================================== */

function closeWindow(windowId) {

document
.getElementById(windowId)
.style.display = "none";

}

/* =====================================================
PHOTO VIEWER
===================================================== */

function openPhoto(photoPath, caption) {

const viewer =
    document.getElementById("photoViewer");

const largePhoto =
    document.getElementById("largePhoto");

const photoCaption =
    document.getElementById("photoCaption");


largePhoto.src = photoPath;

photoCaption.textContent = caption;

viewer.style.display = "flex";

createHeartsBurst();

}

/* =====================================================
CLOSE PHOTO
===================================================== */

function closePhoto(event) {

if (
    event &&
    event.target !==
    document.getElementById("photoViewer")
) {

    return;

}

document
.getElementById("photoViewer")
.style.display = "none";

}

/* =====================================================
SECRET
===================================================== */

function revealSecret() {

document
.getElementById("secretMessage")
.style.display = "block";

createHeartsBurst();

}

/* =====================================================
START MENU
===================================================== */

function showStart() {

const menu =
    document.getElementById("startMenu");


if (
    menu.style.display === "block"
) {

    menu.style.display = "none";

} else {

    menu.style.display = "block";

}

}

/* =====================================================
FINAL SURPRISE
===================================================== */

function finalSurprise() {

document
.getElementById("startMenu")
.style.display = "none";

document
.getElementById("finalScreen")
.style.display = "flex";

createHeartsBurst();

}

/* =====================================================
CLOSE FINAL
===================================================== */

function closeFinal() {

document
.getElementById("finalScreen")
.style.display = "none";

}

/* =====================================================
CLOCK
===================================================== */

function updateClock() {

const now = new Date();

let hours =
    now.getHours();

let minutes =
    now.getMinutes();


hours =
    hours < 10
    ? "0" + hours
    : hours;

minutes =
    minutes < 10
    ? "0" + minutes
    : minutes;


document
.getElementById("clock")
.textContent =
    hours + ":" + minutes;

}

setInterval(
updateClock,
1000
);

updateClock();

/* =====================================================
FLOATING HEART
===================================================== */

function createHeart() {

const heart =
    document.createElement("div");

heart.className =
    "heart-float";


const hearts = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💞",
    "💘"
];


heart.textContent =
    hearts[
        Math.floor(
            Math.random() *
            hearts.length
        )
    ];


heart.style.left =
    Math.random() * 100 + "vw";


heart.style.fontSize =
    (15 + Math.random() * 25) +
    "px";


heart.style.animationDuration =
    (4 + Math.random() * 4) +
    "s";


document
.getElementById("hearts")
.appendChild(heart);


setTimeout(
    () => {
        heart.remove();
    },
    8000
);

}

/* =====================================================
CONTINUOUS HEARTS
===================================================== */

let heartsStarted = false;

function createHearts() {

if (heartsStarted) {
    return;
}

heartsStarted = true;

setInterval(
    createHeart,
    800
);

}

/* =====================================================
HEART BURST
===================================================== */

function createHeartsBurst() {

for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(
        createHeart,
        i * 100
    );

}

}
