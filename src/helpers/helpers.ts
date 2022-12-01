


export const convertRateToUSD = (usdRate: number, qty: number) => {
    let rate = qty / usdRate;
    return rate.toFixed(2) + " BTC"
};

export const getRandomRate = (currencyRate: number) => {
    return
};
