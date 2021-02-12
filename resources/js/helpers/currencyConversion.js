const { exchangeRates, convert } = require('exchange-rates-api');

export const currencyConverter = (to, from, amount) =>{
console.log('---');
    console.log(amount);
console.log(to);
console.log(from);
console.log('---');
    return convert(amount, from, to, '2020-01-01');
}
