

// create USD-GPB conversion function for input box
// create USD-EUR conversion function for input box
// set up test to compare the result in bitcoin value for the above two to the JSON response
// if test fails, populate result with error message & console log a more detailed message

import { useContext } from "react"
import AppContext from "./store/context"


export const conversion = () => {
    return
}

const convertRateToUSD = (rate: number) => {
    return rate * 2
  }

export const mapRespToCurrObj = (resp: any) => {
    try {
        let currencyObjects = Object.values(Object.entries(resp)[3][1]!);
        let convertedCurrDataObject = currencyObjects.map((obj:any) => {
            let convertedRate = convertRateToUSD(obj.rate_float)
            return ({
              currname: obj.description,
              code: obj.code,
              symbol: obj.symbol,
              rateToBc: obj.rate_float,
              rateToUSD: convertedRate,
            })
        })
        return convertedCurrDataObject
    } catch(err) {
        console.log(err)
    }
}

export const mapRespToGraphObj = () => {
    return {
        xValues: ["blah", "blah", "blah"],
        yValues: [1, 2, 3]
    }
}

export const mapArraysToStoreObject = (currData: any, graphData: any) => {
    return {
        currencyData: currData,
        graphData: graphData
    }
}

export const useAppContext = () => {
    const appContext = useContext(AppContext);
    if (!appContext) {
      throw new Error('usePostsContext must be used within the PostsContext.Provider');
    }
    return appContext;
  }