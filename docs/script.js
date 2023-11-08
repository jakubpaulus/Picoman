let jmenoFetaka = window.prompt('Wassup feťáku, jak se jmenuješ?');
console.log('Tvé jméno je ' + jmenoFetaka + '.');
window.alert('Zdravím tě ' + jmenoFetaka + '.');

let mnozstviFetu = window.prompt('Kolik toho u sebe máš?');
console.log(`Tvé množství fetu je ${mnozstviFetu}.`);

const MINIMUM = 5;

if (mnozstviFetu === MINIMUM) {
    window.alert('Vítej mezi námi!');
}

else if (mnozstviFetu > MINIMUM) {
    window.alert('Proč jis nepřišel dřív?!');
}

else {
    window.alert('To je málo, budeš se muset víc snažit!');
}



