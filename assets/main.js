console.log("caricato");

const currency = 10;
const excangeRate = 1.15;

function ConvertEURtoUSD(currency, excangeRate) {
    const result = currency * excangeRate;
    return result;
}

const usd = ConvertEURtoUSD(currency, excangeRate)
console.log(currency, "EUR convertiti in USD sono", usd, "USD, con un tasso di cambio di", excangeRate);
