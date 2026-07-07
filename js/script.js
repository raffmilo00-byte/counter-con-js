// -----------------------------
// Counter App – JS Pulito
// -----------------------------

let counter = 0;

// Contenitore
const container = document.createElement("div");
container.classList.add("counter-container");

// Display
const display = document.createElement("p");
display.classList.add("counter-display");
display.textContent = counter;

// Pulsanti + e -
const btnPlus = document.createElement("button");
btnPlus.textContent = "+";

const btnMinus = document.createElement("button");
btnMinus.textContent = "-";

// Funzioni
function updateDisplay() {
    display.textContent = counter;
}

function increment() {
    counter++;
    updateDisplay();
}

function decrement() {
    if (counter > 0) counter--;
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

// -----------------------------
// TEMA DARK/LIGHT SENZA ICONA
// -----------------------------

const themeBtn = document.createElement("button");
themeBtn.classList.add("theme-toggle");
themeBtn.textContent = "Tema";

container.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
