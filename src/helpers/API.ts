import axios from "axios"

// get data at intervals of 30seconds

const getCurrencyData = async () => {
    try {
        const resp = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        return resp
    } catch(err) {
        console.log(err)
    }
}

const getLatestCurrencyData = async () => {
    setInterval(getCurrencyData, 30000);
}