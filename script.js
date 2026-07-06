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

// Montaggio
container.appendChild(display);
container.appendChild(btnPlus);
container.appendChild(btnMinus);
document.body.appendChild(container);

// Display iniziale
updateDisplay();

// -----------------------------
// TEMA DARK/LIGHT
// -----------------------------

const themeBtn = document.createElement("button");
themeBtn.textContent = "Tema Dark/Light";
themeBtn.classList.add("theme-toggle");
container.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
