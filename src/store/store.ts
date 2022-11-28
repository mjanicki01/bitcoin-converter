import { createContext } from "react";
import { IStoreData, IRespData, BcConversion } from "./types";
import { getCurrencyData } from "../helpers/API";

const resp = getCurrencyData()
const defaultData: IRespData = Object.values(Object.entries(resp)[3][1])[0]

export const AppCtx = createContext<IStoreData | null>(null);

// Provider in app

export const defaultAppContext = {
    // make API call before default context value is set
    currencyData: [
        {
            name: defaultData?.code,
            code: "USD",
            symbol: "&#36;",
            rateToBC: 16512.4342,
            rateToUSD: 16512.4342,
        } 
    ],
    graphData: [
        {
            xValues: ["today", "|", "|"],
            yValues: [1, 2, 4, 6, 3],
        }
    ]
};


// for each currency:

// *** graphData:
// array of historic values to populate graph
// push() new value from global state each API call
// once array has reached length 10, remove 1st element in array after each push()
// remove (x, y) dots from graphjs default

// var xValues (labels) = [`${moment().calendar()} ${moment().format(h:mm:ss a}` (least recent), "|", "|", "|", "|", "|", "|", "|", "|", `${moment().format(h:mm:ss a}` (most recent) ];
// var yValues (date) = [num, num, num, num, num, num, num, num, num, num];


// *** currencyData:
// iterate through resp using .map() to create data object for each currency
// import helper function for USD conversion