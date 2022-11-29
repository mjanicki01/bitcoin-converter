import axios from "axios"


const convertRateToUSD = (currencyRate: number, usdRate: number, qty: number) => {
    let rate = currencyRate / usdRate;
    return rate * qty
  }

export const mapRespToCurrObj = (resp: any) => {
        let currencyObjects = Object.values(Object.entries(resp)[3][1]!);
        return currencyObjects.map((obj:any) => {
            return ({
              currname: obj.description,
              code: obj.code,
              symbol: obj.symbol,
              rateToBc: obj.rate_float,
            });
        });
}

export const mapRespToGraphObj = (resp: any) => {  //call once and push new elements from main.tsx
    let currencyObjects = Object.values(Object.entries(resp)[3][1]!);

    if (localStorage.getItem('Data')) {
        console.log("data exists")
        //push to yvalues array
    } else {
        return currencyObjects.map((obj:any) => {
            return ({
                currency: obj.code,
                xValues: ["|", "|", "|", "|", "|", "|", "|", "|", "|", "|"],
                yValues: [obj.rate_float]
            });
        });
    }
};

export const mapArraysToStoreObject = (currData: any, graphData: any) => {
    return {
        currencyData: currData,
        graphData: graphData
    };
};

export const getResp = async() => {
    try {
      const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      return response.data
    } catch(err){
        console.log(err)
    }
};

export const mapProperties = async() => {
      let respData = await getResp();
      if (respData) {
        let currencyData = mapRespToCurrObj(respData);
        let graphData = mapRespToGraphObj(respData);
        let finalDataFormat = mapArraysToStoreObject(currencyData, graphData);

        return finalDataFormat
      }
};