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

const datum = new Date();

let dobaFetovani = window.prompt (`Od kdy dealuješ?`, 'YYYY-MM-DD');

window.alert(`Už dealuješ ${Math.floor((Date.parse(datum) - Date.parse(new Date(dobaFetovani)))/(1000*60*60*24))} dní.`)

const hesloGang = 'Travkajedobra';
let vitejZpatky = false;
let spatneHeslo = 0;

do {
    if (window.prompt(`Zadej heslo gangu ${jmenoFetaka}.`) === hesloGang) {
        window.alert(`Vítej zpátky ${jmenoFetaka}.`);
        vitejZpatky = true
    }
    else  {
       spatneHeslo ++;
    }
        if (spatneHeslo >= 3) {
        window.alert('Odejdi než to skončí špatně!')
        }
} while(vitejZpatky = true)