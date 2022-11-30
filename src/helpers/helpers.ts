


export const convertRateToUSD = (currencyRate: number, usdRate: number, qty: number) => {
    let rate = currencyRate / usdRate;
    return (rate * qty).toFixed(2) + " BTC"
};

export const getRandomRate = (currencyRate: number) => {
    return
};
