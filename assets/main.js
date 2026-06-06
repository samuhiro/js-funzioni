const userChoice = prompt(
    "Che esercizio vuoi far partire? (1-8)\n" +
    "1 - Convertitore Euro -> Dollari\n" +
    "2 - Calcolo corsa taxi\n" +
    "3 - Anni alla pensione\n" +
    "4 - Voto in giudizio\n" +
    "5 - Giorni di un mese\n" +
    "6 - Durata film leggibile\n" +
    "7 - Media voti\n"
);

switch (userChoice) {
    case "1":
        es1();
        break;
    case "2":
        es2();
        break;
    case "3":
        es3();
        break;
    case "4":
        es4();
        break;
    case "5":
        es5();
        break;
    case "6":
        es6();
        break;
    case "7":
        es7();
        break;
    default:
        console.log("Scelta non valida.");
}

// ESERCIZIO 1 - Convertitore Euro > Dollari

function ConvertEURtoUSD(currency, excangeRate) {
    const result = currency * excangeRate;
    return result;
}

function es1() {
    const currency = 10;
    const excangeRate = 1.15;
    const usd = ConvertEURtoUSD(currency, excangeRate);
    console.log(currency, "EUR convertiti in USD sono", usd, "USD, con un tasso di cambio di", excangeRate);
}

// ESERCIZIO 2 - Calcolo corsa taxi

function CalculatePrice(basePrice, start, end, extra) {
    let total = 0;
    for (let i = start; i < end; i++) {
        if (i >= 12) {
            total += basePrice + extra;
        } else {
            total += basePrice;
        }
    }
    return total;
}

function es2() {
    const standardPrice = 10;
    const startTime = 11;
    const endTime = 13;
    const extraCharge = 5;
    const finalPrice = CalculatePrice(standardPrice, startTime, endTime, extraCharge);
    console.log("Il prezzo finale della corsa è:", finalPrice);
}

// ESERCIZIO 3 - Anni alla pensione

function getYearsToRetirement(sex, birthYear) {
    const ageM = 67;
    const ageF = 62;
    const actualYear = new Date().getFullYear();
    const age = actualYear - birthYear;
    const retirementAge = (sex === "M" || sex === "m") ? ageM : ageF;
    const yearsLeft = retirementAge - age;
    return yearsLeft > 0 ? yearsLeft : 0;
}

function es3() {
    const sex = "M";
    const yearOfBirth = 2001;
    const val = getYearsToRetirement(sex, yearOfBirth);
    console.log(val);
}

// ESERCIZIO 4 - Voto in giudizio

function ConvertGradeToJudgment(numericGrade) {
    const language = navigator.language;
    let textJudgement;
    if (numericGrade < 6) textJudgement = (language === 'it') ? "Insufficiente" : "Insufficient";
    else if (numericGrade > 8) textJudgement = (language === 'it') ? "Ottimo" : "Great";
    else textJudgement = (language === 'it') ? "Sufficiente" : "Good";
    return textJudgement;
}

function es4() {
    const grade = 9;
    let judgement = ConvertGradeToJudgment(grade);
    console.log(judgement);
}

// ESERCIZIO 5 - Giorni di un mese

function IsLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

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

function es5() {
    console.log(HowManyDaysHasTheMonthNumber(2));
}

// ESERCIZIO 6 - Durata film leggibile

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

function es6() {
    const movieLenghtInMinutes = 90;
    console.log(ConvertMovieLenghtInReadableText(movieLenghtInMinutes));
}

// ESERCIZIO 7 - Media voti

function CalculateAverage(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
    }
    const average = sum / numbers.length;
    return Number(average.toFixed(2));
}

function es7() {
    console.log(CalculateAverage(12, 13, 14));
}

