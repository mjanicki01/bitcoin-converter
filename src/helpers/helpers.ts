


export const convertRateToUSD = (currencyRate: number, usdRate: number, qty: number) => {
    let rate = currencyRate / usdRate;
    return rate * qty
};

export const getRandomRate = (currencyRate: number) => {
    return
};
