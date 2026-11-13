/* ==========================================
   ABIKE LOVE
   COMPLETE INTERACTIVE ENGINE
========================================== */


/* ==========================================
   1. LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1800);

});


/* ==========================================
   2. SURPRISE BUTTON
========================================== */

const surpriseBtn =
    document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    document.getElementById("loveSection")
        .scrollIntoView({
            behavior: "smooth"
        });

    createHeartExplosion();

});


/* ==========================================
   3. SECRET MESSAGE
========================================== */

const secretBtn =
    document.getElementById("secretBtn");

const secretMessage =
    document.getElementById("secretMessage");

secretBtn.addEventListener("click", () => {

    secretMessage.classList.toggle("show");

    if (secretMessage.classList.contains("show")) {

        secretBtn.textContent = "HIDE MY SECRET 💗";

        createHeartExplosion();

    } else {

        secretBtn.textContent =
            "DISCOVER MY SECRET 💌";

    }

});


/* ==========================================
   4. HEART COUNTER
========================================== */

const heartBtn =
    document.getElementById("heartBtn");

const heartCount =
    document.getElementById("heartCount");

let totalHearts = 0;

heartBtn.addEventListener("click", () => {

    totalHearts++;

    heartCount.textContent =
        `${totalHearts} ${
            totalHearts === 1 ? "heart" : "hearts"
        } sent`;

    createFloatingHeart();

});


/* ==========================================
   5. FLOATING HEART GENERATOR
========================================== */

const floatingContainer =
    document.getElementById("floating-hearts");

function createFloatingHeart() {

    const heart = document.createElement("div");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];

    heart.classList.add("floating-heart");

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    floatingContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}


/* ==========================================
   6. HEART EXPLOSION
========================================== */

function createHeartExplosion() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createFloatingHeart();

        }, i * 70);

    }

}


/* ==========================================
   7. AUTOMATIC FLOATING HEARTS
========================================== */

setInterval(() => {

    if (document.hidden) return;

    createFloatingHeart();

}, 1800);


/* ==========================================
   8. INFINITE ABIKE LOVE WALL
========================================== */

function generateInfiniteLove() {

    const trackIds = [
        "loveTrack1",
        "loveTrack2",
        "loveTrack3"
    ];

    trackIds.forEach(id => {

        const track =
            document.getElementById(id);

        if (!track) return;

        const message =
            "I LOVE YOU ABIKE ❤️";

        /*
           Two identical groups create
           a continuous scrolling effect.
        */

        for (let group = 0; group < 2; group++) {

            for (let i = 0; i < 18; i++) {

                const text =
                    document.createElement("span");

                text.textContent = message;

                track.appendChild(text);

            }

        }

    });

}

generateInfiniteLove();


/* ==========================================
   9. GOLDEN PARTICLE UNIVERSE
========================================== */

const canvas =
    document.getElementById("particles");

const ctx =
    canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    const ratio =
        Math.min(window.devicePixelRatio || 1, 2);

    canvas.width =
        window.innerWidth * ratio;

    canvas.height =
        window.innerHeight * ratio;

    canvas.style.width =
        window.innerWidth + "px";

    canvas.style.height =
        window.innerHeight + "px";

    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );

}

resizeCanvas();


class Particle {

    constructor() {

        this.x =
            Math.random() * window.innerWidth;

        this.y =
            Math.random() * window.innerHeight;

        this.size =
            Math.random() * 2 + 0.5;

        this.speedX =
            (Math.random() - 0.5) * 0.5;

        this.speedY =
            (Math.random() - 0.5) * 0.5;

        this.opacity =
            Math.random();

    }

    update() {

        this.x += this.speedX;

        this.y += this.speedY;

        if (
            this.x < 0 ||
            this.x > window.innerWidth
        ) {
            this.speedX *= -1;
        }

        if (
            this.y < 0 ||
            this.y > window.innerHeight
        ) {
            this.speedY *= -1;
        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(255,215,100,${this.opacity})`;

        ctx.shadowBlur = 12;

        ctx.shadowColor = "#d4af37";

        ctx.fill();

        ctx.shadowBlur = 0;

    }

}


function initializeParticles() {

    const particleCount =
        window.innerWidth < 600 ? 45 : 100;

    particles = [];

    for (let i = 0; i < particleCount; i++) {

        particles.push(new Particle());

    }

}


initializeParticles();


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    particles.forEach(particle => {

        particle.update();

        particle.draw();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();


window.addEventListener("resize", () => {

    resizeCanvas();

    initializeParticles();

});


/* ==========================================
   10. HEART TRAIL
========================================== */

let lastTrailTime = 0;

function createHeartTrail(x, y) {

    const now = Date.now();

    if (now - lastTrailTime < 100) return;

    lastTrailTime = now;

    const heart =
        document.createElement("span");

    heart.textContent = "💛";

    heart.style.position = "fixed";

    heart.style.left = x + "px";

    heart.style.top = y + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "100";

    heart.style.fontSize = "16px";

    heart.style.transition =
        "all 1s ease";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform =
            "translateY(-45px) scale(0.3)";

        heart.style.opacity = "0";

    });

    setTimeout(() => {
        heart.remove();
    }, 1100);

}


document.addEventListener("mousemove", event => {

    createHeartTrail(
        event.clientX,
        event.clientY
    );

});


document.addEventListener("touchmove", event => {

    const touch = event.touches[0];

    if (touch) {

        createHeartTrail(
            touch.clientX,
            touch.clientY
        );

    }

}, { passive: true });


/* ==========================================
   11. CONSOLE MESSAGE
========================================== */

console.log(
    "%c ABIKE LOVE ❤️ ",
    "background:#d4af37;color:black;padding:15px;font-size:20px;"
);

console.log(
    "A universe created with affection for Abike."
);


/* ==========================================
   END OF ABIKE LOVE ENGINE
========================================== */
