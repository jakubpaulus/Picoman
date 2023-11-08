console.log(`POG!`);

const MINIMUM = 100;

const jmenoUzivatele = window.prompt('Jak se jmenuješ?', 'Péťa');
window.alert(`Ahoj, ${jmenoUzivatele}.`);

let vekUzivatele = window.prompt('Jak jsi starý, dobrodruhu?', 69);

if (vekUzivatele === MINIMUM) {
    window.alert('Vítej na webu!');
}

else if (vekUzivatele > MINIMUM) {
    window.alert(`Minimální věk si překonala o  ${vekUzivatele - MINIMUM} let.`);
}

else {
    if (!isNaN (vekUzivatele)) {
        window.alert(`Do dosažení minimálního věku ti zbývá ${MINIMUM - vekUzivatele} let.`);
    }
    else {
        window.alert(`Výraz ${vekUzivatele} není číslo.`)
    }
    vekUzivatele = window.prompt('Jaký je tvůj skutečný věk?', 101);
}
