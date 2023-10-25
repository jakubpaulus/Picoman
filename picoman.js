console.log(`ahoj ty buzíku, co tu chceš?`);
 let mnozstviFetu = 1;
 console.log(`tvé množství fetu je` + 1);


 // Funkce pro aktualizaci času
 function updateTimer() {
    const timerElement = document.getElementById('timer');
    let seconds = parseInt(timerElement.textContent);
    seconds++;
    timerElement.textContent = seconds;
}

// Spustit aktualizaci času ihned po načtení stránky
setInterval(updateTimer, 1000); // Aktualizace každou sekundu
