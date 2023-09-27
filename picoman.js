 // Funkce pro aktualizaci času
 function updateTimer() {
    const timerElement = document.getElementById('timer');
    let seconds = parseInt(timerElement.textContent);
    seconds++;
    timerElement.textContent = seconds;
}

// Spustit aktualizaci času ihned po načtení stránky
setInterval(updateTimer, 1000); // Aktualizace každou sekundu
