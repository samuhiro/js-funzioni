# Esercizi JavaScript sulle funzioni
Esercizi JavaScript su funzioni realizzati durante il corso di Web Development di Boolean.

Gli esercizi sono testabili aprendo il file index.html e inserendo nel prompt il numero dell'esercizio che si desidera avviare.

# Esercizio 1
Stai pianificando un viaggio negli USA. Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari, dato il tasso di cambio del giorno.
(1 Euro = 1,15 Dollaro)

## Ragionamento
- Dichiaro il valore in eur
- Dichiaro il valore del tasso di cambio
- Moltiplico il valore in eur per il tasso di cambio
- Stampiamo il risultato


### Snippet
```js
const currency = 10;
const excangeRate = 1.15;

function ConvertEURtoUSD(currency, excangeRate) {
    const result = currency * excangeRate;
    return result;
}

const usd = ConvertEURtoUSD(currency, excangeRate)
console.log(currency, "EUR convertiti in USD sono", usd, "USD, con un tasso di cambio di", excangeRate);


```

# Esercizio 2
Un taxi applica una tariffa extra fissa dopo il mezzogiorno. Scrivi una funzione che calcoli il totale della corsa dato il prezzo base, l'orario di partenza e l'orario di arrivo.

## Ragionamento
- Dichiaro il prezzo base
- Dichiaro l'orario di partenza
- Dichiaro l'orario di arrivo
- Calcolo il prezzo
- Stampo il prezzo


### Snippet
```js
const standardPrice = 10;
const startTime = 11;
const endTime = 13;
const extraCharge = 5;

function CalculatePrice(basePrice, start, end, extra) {
    let total = 0;
    for (let i = start; i < end; i++) {
        if (i >= 12) {
            total += basePrice + extra;
        }
        else {
            total += basePrice;
        }
    }

    return total;
}

const finalPrice = CalculatePrice(standardPrice, startTime, endTime, extraCharge);
console.log("Il prezzo finale della corsa è:", finalPrice);
```

# Esercizio 3
Scrivi una funzione che, dato l'anno di nascita e il genere (M/F), calcoli quanti anni mancano per raggiungere l'età pensionabile (fissata a 67 anni per gli uomini e 62 per le donne).

## Ragionamento
- Dichiaro le età pensionabili
- Calcolo quanti anni anni ha l'utente
- Calcolo quanti anni mancano all'età pensionabile
- Stampo il risultato

### Snippet
```js
const ageM = 67;
const ageF = 62;
const actualYear = new Date().getFullYear();

function getYearsToRetirement(sex, birthYear) {
    const age = actualYear - birthYear;
    const retirementAge = (sex === "M" || sex === "m") ? ageM : ageF;
    const yearsLeft = retirementAge - age;
    return yearsLeft > 0 ? yearsLeft : 0;
}

const sex = "M";
const yearOfBirth = 2001;

const val = getYearsToRetirement(sex, yearOfBirth)
console.log(val);
```

# Esercizio 4
Un professore deve convertire un voto numerico in un giudizio. Scrivi una funzione che restituisca "Insufficiente", "Sufficiente" o "Ottimo" in base al punteggio.

## Ragionamento
- Dichiaro il voto numero
- SE è minore di 6 lo converto in "Insufficiente"
- ALTRIMENTI SE è maggiore di 8 lo converto in "Ottimo"
- ALTRIMENTI lo converto in "Sufficiente"

### Snippet
```js
function ConvertGradeToJudgment(numericGrade) {
    const language = navigator.language;
    let textJudgement;
    if (numericGrade < 6) textJudgement = (language === 'it') ? "Insufficiente" : "Insufficient";
    else if (numericGrade > 8) textJudgement = (language === 'it') ? "Ottimo" : "Great";
    else textJudgement = (language === 'it') ? "Sufficiente" : "Good";

    return textJudgement;
}

const grade = 9;
let judgement = ConvertGradeToJudgment(grade);

console.log(judgement);
```

# Esercizio 5
Stai organizzando un evento. Scrivi una funzione che ti dica quanti giorni ha un determinato mese.

### Snippet
```js
function HowManyDaysHasTheMonthNumber(numberOfMonth) {
    switch (numberOfMonth) {
        case 1: return 31;
        case 2: return (IsLeapYear(new Date().getFullYear())) ? 29 : 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
        default: return "Valore non valido";
    }
}

function IsLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(HowManyDaysHasTheMonthNumber(2))
```

# Esercizio 6
Hai la durata di un film in minuti totali. Scrivi una funzione che la converta in un formato più leggibile "X ore e Y minuti".

### Snippet
```js
function ConvertMovieLenghtInReadableText(mins) {
    if (typeof mins !== "number") return "Errore: inserisci un numero";
    if (mins <= 0) return "Errore: durata non valida";

    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;

    let result = "";

    if (hours > 0) {
        result += hours + (hours === 1 ? " ora " : " ore ");
    }

    if (minutes > 0) {
        result += (hours > 0 ? "e " : "") +
            minutes + (minutes === 1 ? " minuto" : " minuti");
    }

    return result;
}
const movieLenghtInMinutes = 90;
console.log(ConvertMovieLenghtInReadableText(movieLenghtInMinutes));
```

# Esercizio 7
Finisce l'anno scolastico e vuoi fare la media dei tuoi voti. Scrivi una funzione che riceve tre voti numerici e restituisce la media aritmetica.

### Snippet
```js
USANDO ARRAY
function CalculateAverage(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    return Number(average);
}

const numbers = [6, 7, 8];
console.log(CalculateAverage(numbers));

___________

USANDO OPERATORE REST
function CalculateAverage(...numbers) {

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }
    const average = sum / numbers.length;
    return Number(average.toFixed(2));
}

console.log(CalculateAverage(12, 13, 14));

```

# Esercizio 8


## Ragionamento


### Snippet
```js

```