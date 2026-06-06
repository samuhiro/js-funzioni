console.log("caricato");

const eur = 10;
const tasso = 1.15;

function EurToUSD(eur, tasso) {
    const usd = eur * tasso;
    return usd;
}

const usd = EurToUSD(eur, tasso)
console.log(eur, "EUR convertiti in USD sono", usd, "USD, con un tasso di cambio di", tasso);
