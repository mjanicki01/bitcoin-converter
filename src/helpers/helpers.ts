


export const convertRateToUSD = (rate: number, qty: number) => {
    let BTCamt = qty / rate;
    return BTCamt.toFixed(2) + " BTC"
};

