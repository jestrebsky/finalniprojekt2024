console.log('funguje');

// Funkce pro přejmenování okna
function prejmenujOkno(noveJmeno) {
  window.document.title = noveJmeno;
}

// Přijmenování okna
prejmenujOkno('Kočičí bible');

const MINIMUM = 75;
const MAXIMUM = 100;
const jmenoUzivatele = window.prompt('Jak ti mám říkat?', 'User');
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeZena = window.confirm('Doufám, že máš kočku doma!');

if (jeZena) {
  const pocetKocek = window.prompt('Kolik máš koček doma?');

  if (pocetKocek !== null) {
    const pocetKocekInt = parseInt(pocetKocek);

    if (!isNaN(pocetKocekInt) && pocetKocekInt >= 1) {
      window.alert(`Ahoj, ${jmenoUzivatele}! Vítej na webu s ${pocetKocekInt} kočkami!`);
    } else {
      window.alert('Musíš mít alespoň jednu kočku!');
    }
  } else {
    window.alert('Nezadal jsi žádný počet koček!');
  }
} else {
  window.alert('Fuj! Kšá! Sem nesmíš!');
}

function zjistiAktualniDen() {
  const dnyVTydnu = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
  const dnesniDen = new Date().getDay();
  return dnyVTydnu[dnesniDen];
}

function jeDenProHru() {
  const aktualniDen = zjistiAktualniDen();
  // Nyní se předpokládá, že každý den je den pro hru.
  return true;
}

const dnesniDen = zjistiAktualniDen();

if (jeDenProHru()) {
  window.alert(`Dnes je ${dnesniDen} a je to skvělý den pro hraní hry!`);
} else {
  window.alert(`Dnes je ${dnesniDen}, takže si zahraj hru jindy.`);
}

// Ověření jména
let jmeno;
let jmenoOK = false;
do {
  jmeno = window.prompt('Zadej uživatelské jméno:').trim();
  if (jmeno.includes(' ')) {
    window.alert('Uživatelské jméno nesmí obsahovat žádné mezery!');
  } else {
    jmenoOK = true;
  }
} while (!jmenoOK);

// Ověření mailu
let email;
let emailOK = false;
do {
  email = window.prompt('Zadej e-mail:').trim();
  if (email.indexOf('@') <= 0 || email.indexOf('@') === email.length - 1) {
    window.alert('Neplatná e-mailová adresa!');
  } else {
    emailOK = true;
  }
} while (!emailOK);

// Ověření hesla
let heslo;
let hesloOK = false;
do {
  heslo = window.prompt('Zadej heslo:').trim();
  if (heslo.length < 3) {
    window.alert('Heslo musí mít aspoň 3 znaky!');
  } else {
    for (let i = 0; i < 10; i++) {
      if (heslo.includes(i.toString())) {
        hesloOK = true;
      }
    }
    if (!hesloOK) {
      window.alert('Heslo musí obsahovat aspoň 1 číslici!');
    }
  }
} while (!hesloOK);

// Výpis
let hesloTajne = '';
window.alert(`Souhrn: \n Uživatelské jméno: ${jmeno} \n E-mail: ${email} \n Heslo: ${hesloTajne.padStart(heslo.length, '*')}`);

// Přidání kódu
document.querySelector('img').src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_dark_color_272x92dp.png';
const inputText = 'Google search';
document.querySelector('input[type=text]').placeholder = inputText;
document.querySelector('input[type=button]').value = inputText;
document.querySelectorAll('a').forEach(element => {
  element.href = 'https://google.com';
});

// Vybrání tlačítka pomocí ID
const zacitHruButton = document.getElementById('zacitHru');

// Přidání posluchače události pro kliknutí na tlačítko
if (zacitHruButton) {
  zacitHruButton.addEventListener('click', () => {
    // Přesměrování na další stránku
    window.location.href = 'http://127.0.0.1:5500/projekt/adresa-dalsi-stranky.html'; // Změňte 'adresa-dalsi-stranky.html' na skutečnou URL další stránky
  });
} else {
  console.error('Tlačítko s ID "zacitHru" nebylo nalezeno.');
}