// -----------------------------
// Counter App – JS Pulito
// -----------------------------

// Valore iniziale del counter
let counter = 0;

// Creazione degli elementi
const container = document.createElement("div");
container.classList.add("counter-container");

const display = document.createElement("p");
display.classList.add("counter-display");
display.textContent = counter;

const btnPlus = document.createElement("button");
btnPlus.textContent = "+";

const btnMinus = document.createElement("button");
btnMinus.textContent = "-";

// Funzioni DRY
function updateDisplay() {
    display.textContent = counter;
}

function increment() {
    counter += 1;
    updateDisplay();
}

function decrement() {
    if (counter > 0) counter -= 1;
    updateDisplay();
}

// Eventi click
btnPlus.addEventListener("click", increment);
btnMinus.addEventListener("click", decrement);

// Eventi tastiera
document.addEventListener("keydown", (e) => {
    if (e.key === "+") increment();
    if (e.key === "-") decrement();
});

// Montaggio elementi counter
container.appendChild(display);
container.appendChild(btnPlus);
container.appendChild(btnMinus);
document.body.appendChild(container);

// Display iniziale
updateDisplay();

// -----------------------------
// TEMA DARK/LIGHT con icona
// -----------------------------

const themeBtn = document.createElement("button");
themeBtn.classList.add("theme-toggle");

// icona
const themeIcon = document.createElement("span");
themeIcon.classList.add("theme-icon");
themeIcon.textContent = "🌙"; // icona iniziale

// testo
const themeText = document.createElement("span");
themeText.textContent = "Tema";

themeBtn.appendChild(themeIcon);
themeBtn.appendChild(themeText);
container.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // cambia icona
    if (document.body.classList.contains("dark")) {
        themeIcon.textContent = "☀️";
    } else {
        themeIcon.textContent = "🌙";
    }
});
