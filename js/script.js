// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// Individuate gli elementi di cui avete bisogno per realizzare il programma.

function randomNum() {
    var pcListNum = [];
    while (pcListNum.length < 5){
        var i = Math.floor(Math.random() * 100 + 1)
        if (pcListNum.includes(i) === flase) {
            pcListNum.push(i)
        }
    }
}

var randomNumbersPc = randomNum();

var time = 10;
var timer = setInterval(function() {
    document.getElementById("numbers").innerHTML=("MEMORIZZA QUESTI NUMERI" + " " + randomNumbersPc);
    document.getElementById("timeS").innerHTML="COUNTDOWN" + " " + time;
    time = (time - 1);
    if (time === 1) {
        clearInterval(timer);
        document.getElementById("numbers").style.display = "none";
        document.getElementById("time").style.display = "none";
    }
}, 1000);

var promptimer = 1;
var score = 0;
setTimeout(function() {
    promptimer = (promptimer - 1);
    var utentNumbers = []
    if (promptimer === 0) {

        while (utentNumbers.length < 5) {
            var askUtentNumbers = parseInt(prompt("INSERISCI I NUMERI CHE TI RICORDI"))
            if (utentNumbers.includes(askUtentNumbers) === false) {
                utentNumbers.push(askUtentNumbers)
            }
        }
    }
    for (var x = 0; x < utentNumbers.length; x++) {
        if(randomNumbersPc.includes(utentNumbers[x])) {
            score++;
        }
    }

    if(score > 0) {
        alert("hai indovinato" + score + "numeri");
    } else {
        alert ("non hai indovinato nessun numero!")
    }
}, 13000);