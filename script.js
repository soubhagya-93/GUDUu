// ======================================
// LOGIN DETAILS
// ======================================

// CHANGE THESE TWO VALUES

const correctName = "Gudu";
const correctPassword = "143";


// ======================================
// LOGIN FUNCTION
// ======================================

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


    // Check name

    if (
        name.toLowerCase() !==
        correctName.toLowerCase()
    ) {

        alert(
            "❌ Sorry ❤️ This world is only for my special person."
        );

        return;
    }


    // Check password

    if (
        password !== correctPassword
    ) {

        alert(
            "🔐 Wrong password... Try again, my love ❤️"
        );

        return;
    }


    // Successful login

    document
        .getElementById("loginScreen")
        .style.display = "none";


    document
        .getElementById("desktop")
        .style.display = "block";


    // Start floating hearts

    startHearts();
}



// ======================================
// OPEN WINDOW
// ======================================

function openWindow(id) {

    document
        .getElementById(id)
        .style.display = "block";


    document
        .getElementById("startMenu")
        .style.display = "none";
}



// ======================================
// CLOSE WINDOW
// ======================================

function closeWindow(id) {

    document
        .getElementById(id)
        .style.display = "none";
}



// ======================================
// START MENU
// ======================================

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



// ======================================
// SECRET FILE
// ======================================

function revealSecret() {

    const message =
        document.getElementById("secretMessage");


    message.style.display = "block";


    startHearts();
}



// ======================================
// FINAL SURPRISE
// ======================================

function finalSurprise() {

    document
        .getElementById("startMenu")
        .style.display = "none";


    document
        .getElementById("finalScreen")
        .style.display = "flex";


    startHearts();
}



// ======================================
// CLOSE FINAL SCREEN
// ======================================

function closeFinal() {

    document
        .getElementById("finalScreen")
        .style.display = "none";
}



// ======================================
// DIGITAL CLOCK
// ======================================

function updateClock() {

    const now = new Date();


    let hours =
        now.getHours()
            .toString()
            .padStart(2, "0");


    let minutes =
        now.getMinutes()
            .toString()
            .padStart(2, "0");


    document
        .getElementById("clock")
        .innerText =
        hours + ":" + minutes;
}


setInterval(
    updateClock,
    1000
);


updateClock();



// ======================================
// FLOATING HEARTS
// ======================================

let heartsStarted = false;


function startHearts() {

    // Prevent multiple timers

    if (heartsStarted) {
        return;
    }


    heartsStarted = true;


    setInterval(() => {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        const heartTypes = [

            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "💞",
            "🌹"

        ];


        heart.innerText =
            heartTypes[
                Math.floor(
                    Math.random() *
                    heartTypes.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (20 + Math.random() * 30) +
            "px";


        heart.style.animationDuration =
            (5 + Math.random() * 5) +
            "s";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 10000);


    }, 500);
}



// ======================================
// ENTER KEY LOGIN
// ======================================

document
    .getElementById("passwordInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                login();

            }

        }
    );
