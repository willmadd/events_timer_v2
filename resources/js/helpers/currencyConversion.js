const { exchangeRates, convert } = require('exchange-rates-api');

export const currencyConverter = (to, from, amount) =>{
    return convert(amount, from, to, '2020-01-01');
}
