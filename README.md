# Counter App — JavaScript Project

<p align="center">
  <img src="img/image.png" alt="Anteprima dell'applicazione" width="300">
</p>

## 🎯 Panoramica

Counter App è una piccola applicazione web che permette di incrementare e decrementare un valore numerico.  
L’interfaccia è generata interamente tramite JavaScript, senza HTML statico, ed è progettata con attenzione alla semplicità, alla pulizia del codice e all’accessibilità.

L’app è pubblicata tramite GitHub Pages ed è pensata come esercizio pratico di:

- manipolazione del DOM
- gestione degli eventi
- creazione dinamica dell’interfaccia
- uso di localStorage
- attenzione all’accessibilità
- cura del design

---

## 🚀 Funzionalità

- Incremento e decremento del valore tramite pulsanti
- Supporto alla tastiera (ArrowUp / ArrowDown)
- Tema chiaro/scuro
- Interfaccia generata dinamicamente via JavaScript
- Persistenza del valore tramite `localStorage`
- Design moderno con glass-card e gradient
- Focus visibile per la navigazione da tastiera
- Riduzione delle animazioni per utenti con `prefers-reduced-motion`

---

## 🧩 Struttura del progetto


## 🖼️ Preview

<p align="center">
 <img src="img/image.png" alt="Counter App Preview" width="350">

</p>


---
├── index.html
├── style.css
├── script.js
└── img/
└── image.png

### **index.html**
- Carica Google Fonts (Poppins)
- Carica CSS e JS
- Contiene solo il contenitore `<div id="app"></div>`

### **style.css**
- Layout centrato
- Gradient di sfondo
- Glass-card
- Pulsanti con animazioni
- Accessibilità:
  - `button:focus` con outline visibile
  - `@media (prefers-reduced-motion: reduce)` per disattivare animazioni

### **script.js**
- Genera dinamicamente tutta l’interfaccia
- Gestisce incrementi/decrementi con funzione unica `changeBy(delta)`
- Supporta tastiera e mouse
- Gestisce tema scuro
- Salva il valore in `localStorage`

---

## 🧪 Requisiti soddisfatti

- ✔ DOM manipulation avanzata  
- ✔ Event handling (click + tastiera)  
- ✔ UI generata via JavaScript  
- ✔ Accessibilità (focus, aria-live, reduced motion)  
- ✔ Persistenza dati  
- ✔ Tema dinamico  
- ✔ Codice DRY e rifattorizzato  
- ✔ README completo e professionale  

---

## ▶️ Come eseguire il progetto

1. Clona il repository:
   ```bash
   git clone (https://img.shields.io/badge/GitHub%20Pages-Online-brightgreen)](https://raffmilo00-byte.github.io/counter-con-js/)

2 Apri index.html nel browser

Oppure visita la demo online tramite GitHub Pages

♿ Accessibilità
Il progetto include:

aria-live="polite" per aggiornare il valore in modo accessibile

Focus visibile per chi usa la tastiera

Supporto completo alla tastiera (ArrowUp / ArrowDown)

Riduzione animazioni per utenti sensibili al movimento

🧠 Note sulla qualità del codice
Logica centralizzata in changeBy(delta)

Nessuna duplicazione

Funzioni piccole e chiare

UI generata con funzioni pure

CSS pulito e coerente

Variabili inutilizzate rimosse

👤 Autore
Raff  
Progetto realizzato come esercizio di JavaScript, DOM e UI design.

