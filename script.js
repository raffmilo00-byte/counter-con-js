// -----------------------------
// Valore iniziale del counter
// -----------------------------
let counter = 0;

// -----------------------------
// Creazione dell'interfaccia
// -----------------------------
function createCounterUI() {
    // 1. Creazione degli elementi
    const container = document.createElement("div");
    const display = document.createElement("p");
    const btnPlus = document.createElement("button");
    const btnMinus = document.createElement("button");

    // 2. Configurazione degli elementi
    container.classList.add("counter-container");

    display.textContent = counter;
    display.classList.add("counter-display");

    btnPlus.textContent = "+";
    btnPlus.classList.add("btn-plus");

    btnMinus.textContent = "-";
    btnMinus.classList.add("btn-minus");

    // 3. Restituzione dell’oggetto
    return {
        container,
        display,
        btnPlus,
        btnMinus
    };
}

// -----------------------------
// Logica del counter
// -----------------------------
function setupCounterLogic(ui) {
    ui.btnPlus.addEventListener("click", () => {
        counter++;
        ui.display.textContent = counter;
    });

    ui.btnMinus.addEventListener("click", () => {
        counter--;
        ui.display.textContent = counter;
    });
}

// -----------------------------
// Montaggio dell'interfaccia
// -----------------------------
const ui = createCounterUI();

// Aggiungo il container al DOM
document.body.appendChild(ui.container);

// Inserisco gli elementi dentro il container
ui.container.appendChild(ui.display);
ui.container.appendChild(ui.btnPlus);
ui.container.appendChild(ui.btnMinus);

// Attivo la logica del counter
setupCounterLogic(ui);

// -----------------------------
// Pulsante toggle tema
// -----------------------------
const themeBtn = document.createElement("button");
themeBtn.textContent = "cambia tema";
themeBtn.classList.add("theme-toggle");
ui.container.appendChild(themeBtn);

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
