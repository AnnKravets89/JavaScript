function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let selectedCurrency;
    for (let i of currencyValues) {
        if (i.currency === exchangeCurrency) {
            selectedCurrency = i;
        }
    }
     return sumUAH / selectedCurrency.value;
}
console.log(exchange( 10000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'USD'));
