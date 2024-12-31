const present = document.getElementById("present");
const confetti = document.getElementById("confetti");

let opening = false;

present.addEventListener("click", () => {
    if (opening) return;
    
    present.classList.add("open");
    confetti.classList.add("open");
    opening = true;

    setTimeout(() => {
        present.classList.remove("open");
    }, 700);
    setTimeout(() => {
        confetti.classList.remove("open");
        opening = false;
    }, 1000);
})
