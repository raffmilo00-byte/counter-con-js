// Valore iniziale del counter
let counter = 0;

// Creazione degli elementi
const container = document.createElement("div");
container.classList.add("counter-container");

const display = document.createElement("p");
display.classList.add("counter-display");

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
    if (counter > 0) counter -= 1;   // esempio di logica unica
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
