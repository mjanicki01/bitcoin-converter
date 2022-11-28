import axios from "axios"
import { BcConversion } from "../store/types";

// get data at intervals of 30seconds

export const getCurrencyData = async () => {
    try {
        const resp: BcConversion = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        return resp
    } catch(err) {
        console.log(err)
    }
}

const getLatestCurrencyData = async () => {
    setInterval(getCurrencyData, 30000);
}