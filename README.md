# Counter App — JavaScript Project

![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=white)
![Version](https://img.shields.io/badge/Version-1.0-000000?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge)

---

## Live Demo

https://raffmilo00-byte.github.io/counter-con-js/

---

## Descrizione

Applicazione di conteggio sviluppata in JavaScript puro. L'interfaccia (display e pulsanti) è generata dinamicamente tramite DOM. Include incremento/decremento del valore, toggle tema chiaro/scuro e persistenza del valore tramite `localStorage`.

---

## Requisiti soddisfatti

- JavaScript puro, senza framework
- Interfaccia creata dinamicamente con `document.createElement`
- Pulsanti `+` e `-` funzionanti e aggiornamento del display via JS
- Codice suddiviso in funzioni (`createCounterUI`, `setupCounterLogic`, `updateDisplay`)
- Struttura dei file separata in `index.html`, `js/`, `css/`
- README con link alla demo

---

## Struttura del progetto

/counter-con-js
│── index.html
│── js/script.js
│── css/style.css

---

## Come eseguire

1. Aprire `index.html` in un browser moderno oppure usare la Live Demo.
2. I pulsanti `+` e `-` aggiornano il valore; il valore è salvato automaticamente in `localStorage`.

---

## Note su accessibilità e qualità del codice

- Display con `role="status"` e `aria-live="polite"` per aggiornamenti letti dagli screen reader.
- Pulsanti `<button>` con `aria-label`.
- Funzioni modulari per separare UI e logica.
- Testato su Chrome e Firefox.

---

## Autore

Raffaele Milo
![Preview](<img width="615" height="288" alt="image" src="https://github.com/user-attachments/assets/922d2547-8b00-4b51-85fb-47bd0f06e1d1" />
)

