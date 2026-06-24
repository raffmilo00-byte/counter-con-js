Counter App — JavaScript Project
https://img.shields.io/badge/JavaScript-000000?style=for-the-badge&logo=javascript&logoColor=white
https://img.shields.io/badge/CSS3-000000?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=white
https://img.shields.io/badge/Version-1.0-000000?style=for-the-badge
https://img.shields.io/badge/License-MIT-000000?style=for-the-badge

https://img.shields.io/badge/Netlify-000000?style=for-the-badge&logo=netlify&logoColor=white
https://img.shields.io/badge/GitHub_Actions-000000?style=for-the-badge&logo=githubactions&logoColor=white
https://img.shields.io/badge/Made_by-Raff-000000?style=for-the-badge

Live Demo
https://raffmilo00-byte.github.io/counter-con-js/

Descrizione del progetto
Questo progetto è una semplice applicazione di conteggio sviluppata in JavaScript senza l’utilizzo di framework.
L’interfaccia viene generata dinamicamente tramite manipolazione del DOM e include un sistema di incremento/decremento, un design moderno basato su CSS avanzato e un selettore di tema chiaro/scuro.

L’obiettivo è esercitarsi con:

gestione degli eventi

funzioni modulari

creazione dinamica degli elementi

utilizzo di variabili CSS

animazioni e transizioni

organizzazione del codice

Funzionalità principali
Incremento e decremento del valore

Interfaccia generata interamente via JavaScript

Tema chiaro/scuro attivabile tramite pulsante

Stile moderno con gradienti, effetto glass e animazioni

Font personalizzato tramite Google Fonts

Codice strutturato in funzioni per una migliore leggibilità

Anteprima
(Inserire qui uno screenshot del progetto)

Per aggiungerlo:

Effettuare uno screenshot

Caricarlo nel repository

Copiare il link generato

Inserirlo nel README con la sintassi:

Codice
![Preview](URL_DELL_IMMAGINE)
Struttura del progetto
Codice
/project-folder
│── index.html
│── script.js
│── style.css
└── README.md
Dettagli tecnici
Creazione dell’interfaccia
La UI viene generata tramite una funzione dedicata che crea e restituisce gli elementi principali:

js
createCounterUI()
Logica del counter
La gestione degli eventi è separata dalla creazione dell’interfaccia:

js
setupCounterLogic(ui)
Tema chiaro/scuro
Il tema viene alternato tramite l’aggiunta/rimozione della classe:

js
document.body.classList.toggle("dark")
Tecnologie utilizzate
HTML5

CSS3 (gradienti, blur, animazioni, variabili CSS)

JavaScript (DOM, funzioni modulari)

Google Fonts

GitHub Pages per il deploy

Deploy su Netlify (opzionale)
Per pubblicare il progetto su Netlify:

Accedere a https://netlify.com

Selezionare “Add new site” → “Deploy manually”

Trascinare la cartella del progetto

Attendere la generazione del link pubblico

Autore
Raffaele Milo
Progetto realizzato per esercitazione e approfondimento delle basi di JavaScript e del DOM.

Note
Se il progetto risulta utile o interessante, è possibile lasciare una stella al repository.
