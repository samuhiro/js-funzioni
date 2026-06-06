# Titolo

# Esercizio 
Stai pianificando un viaggio negli USA. Scrivi una funzione che converta una somma in Euro nel corrispondente valore in Dollari, dato il tasso di cambio del giorno.
(1 Euro = 1,15 Dollaro)

## Ragionamento
- Dichiaro il valore in eur
- Dichiaro il valore del tasso di cambio
- Moltiplico il valore in eur per il tasso di cambio
- Stampiamo il risultato


### Snippet
```js
const eur = 10;
const tasso = 1.15;

function EurToUSD(eur, tasso) {
    const usd = eur * tasso;
    return usd;
}

const usd = EurToUSD(eur, tasso)
console.log(eur, "EUR convertiti in USD sono", usd, "USD, con un tasso di cambio di", tasso);

```
