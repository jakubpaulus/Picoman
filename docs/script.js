//Tato část kódu dělá to, že uživateli zobrazí vyskakovací okno, které se ho ptá, jak se jmenuje. Pokud zadá správnou hodnotu, tak se objeví další vyskakovací okno, které ho pozdraví jeho jménem. Pokud je hodnota špatně zadaná, tedy má méně než 3 znaky, tak se ho zeptá znova.
let jmenoFetaka = window.prompt('Wassup feťáku, jak se jmenuješ?');
if (jmenoFetaka.length <= 3) {
    window.alert('Jméno, které má pouze 3 znaky není jméno.');
    let jmenoFetaka = window.prompt('Jak se teda jmenuješ?');
    window.alert('Zdravím tě ' + jmenoFetaka + '.');
    console.log(jmenoFetaka);
}
else {
    window.alert('Zdravím tě ' + jmenoFetaka + '.');
    console.log(jmenoFetaka);
}


//Tato část kódu se ptá uživatele, kolik má u sebe daného materiálu a kolik mu je let. Pokud splňuje dané podmínky, obejví se mu vyskakovací okno s pozitivní zprávou, pokud ale zadal hodnoty, které nesplňují podmínky, tak se mu objeví vyskakovací okno s negativní zprávou.
const podminky = {
    MINIMUM: 5,
    MINIMALNIVEK: 18
}

let mnozstviFetu = window.prompt('Kolik toho u sebe máš?');
console.log(`Tvé množství fetu je ${mnozstviFetu}.`);

if (isNaN (mnozstviFetu)) {
    window.alert(`To není číslo ty pako.`);
    mnozstviFetu = window.prompt(`Kolik toho teda máš?`);
}


let vekFetaka = window.prompt ('Kolik ti je let feťáku?')

if (isNaN (vekFetaka)) {
    let vekFetaka = window.prompt('Tohle není číslo, kolik ti je teda let?')
}

if (Number(mnozstviFetu) === podminky.MINIMUM && vekFetaka >= podminky.MINIMALNIVEK) {
    window.alert('Vítej mezi námi!');
}

else if (mnozstviFetu > podminky.MINIMUM && vekFetaka >= podminky.MINIMALNIVEK) {
    window.alert('Proč jsi nepřišel dřív?! Dávno bychom tě vzali!');
}

else {
    if (mnozstviFetu < podminky.MINIMUM || vekFetaka < podminky.MINIMALNIVEK) {
        window.alert (`Přijď až budeš splňovat podmínky.`);
    }
}


//Tato část kódu se ptá uživatele, do kdy už dealuje a následně mu vypočítá jak dlouho už dealuje (ve dnech).
//Tento kód je převzatý ze cvičení!!!
const datum = new Date();

let dobaFetovani = window.prompt (`Od kdy dealuješ?`, 'YYYY-MM-DD');

window.alert(`Už dealuješ ${Math.floor((Date.parse(datum) - Date.parse(new Date(dobaFetovani)))/(1000*60*60*24))} dní.`)


//Tato část kódu se ptá uživatele na heslo gangu. Pokud ho zadá dobře může pokračovat pokud ne, tak se ho stránka ptá do doby než zadá heslo dobře.
const hesloGang = 'Travkajedobra';
let vitejZpatky = false;
let spatneHeslo = 0;

do {
    if (window.prompt(`Zadej heslo gangu ${jmenoFetaka}.`) === hesloGang) {
        window.alert(`Vítej zpátky ${jmenoFetaka}.`);
        vitejZpatky = true
        break; 
    }
    else  {
       spatneHeslo ++;
    }
        if (spatneHeslo >= 3) {
        window.alert('Odejdi než to skončí špatně!')
        }
} while(vitejZpatky = true)


//Tato část kódů pouze vyhodí uživateli vyskakovací okno, na základě předešlé podmínky a jejího splněnění, či částečnho splnění. S tím že kód bere hodnoty z pole.    
const welcomeFet = ['1 gram', '3 gramy']

if (mnozstviFetu > podminky.MINIMUM && vekFetaka >= podminky.MINIMALNIVEK ) {
    window.alert(`Tady máš ${welcomeFet[1]} jako donate do začátku.`);
}

else {
    window.alert(`Tady máš ${welcomeFet[0]} abys neřekl že jsme škrti.`)
}


//Tato část kódu mění barvu pozadí stránky po kliknutí na tlačítko.
document.querySelector('.backgroundmode').addEventListener('click', () => {
    console.log('klik');
    if (document.querySelector('body').classList.contains('tmavepozadi')) {
        document.querySelector('body').classList.remove('tmavepozadi');
        document.querySelector('body').classList.add('svetlepozadi')
      }
      else {
        document.querySelector('body').classList.remove('svetlepozadi');
        document.querySelector('body').classList.add('tmavepozadi');
      }
})