const SNOWFLAKE_AMOUNT = 150;
const ANIMATION_DURATION = 10 * 1000;

// expand snowflake spawning positions so some come from off-screen
const offsetY = window.innerHeight * 0.2;

let count = 0;
const interval = setInterval(() => {
    
    const flake = document.createElement("div");
    flake.className = "snowflake";

    flake.style.setProperty("--x", (Math.random() * window.innerWidth * 1.2) + "px");
    flake.style.setProperty("--y", (Math.random() * window.innerHeight * 1.2 - offsetY) + "px");
    flake.style.setProperty("--blur", 3 + (Math.random() * 10) + "px");
    flake.style.setProperty("--angle", 5 + (Math.random() * 30) + "deg");

    document.body.appendChild(flake);

    count++;
    if (count >= SNOWFLAKE_AMOUNT) clearInterval(interval);
}, ANIMATION_DURATION / SNOWFLAKE_AMOUNT)


for (let i = 0; i < count; i++) {

}