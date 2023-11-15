let jmenoFetaka = window.prompt('Wassup feťáku, jak se jmenuješ?');
console.log('Tvé jméno je ' + jmenoFetaka + '.');
window.alert('Zdravím tě ' + jmenoFetaka + '.');

let mnozstviFetu = window.prompt('Kolik toho u sebe máš?');
console.log(`Tvé množství fetu je ${mnozstviFetu}.`);

if (isNaN (mnozstviFetu)) {
    window.alert(`To není číslo ty pako.`);
    mnozstviFetu = window.prompt(`Kolik toho teda máš?`);
}

const MINIMUM = 5;
const MINIMALNIVEK = 18;

let vekFetaka = window.prompt ('Kolik ti je let feťáku?')

if (isNaN (vekFetaka)) {
    let vekFetaka = window.prompt('Tohle není číslo, kolik ti je teda let?')
}

if (Number(mnozstviFetu) === MINIMUM && vekFetaka >= MINIMALNIVEK) {
    window.alert('Vítej mezi námi!');
}

else if (mnozstviFetu > MINIMUM && vekFetaka >= MINIMALNIVEK) {
    window.alert('Proč jsi nepřišel dřív?! Dávno bychom tě vzali!');
}

else {
    if (mnozstviFetu < MINIMUM || vekFetaka < MINIMALNIVEK) {
        window.alert (`Přijď až budeš splňovat podmínky.`);
    }
}






