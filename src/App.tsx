
import axios from "axios";
import React, { useCallback, useState } from "react";
import Main from "./components/main";
import { mapArraysToStoreObject, mapRespToCurrObj, mapRespToGraphObj } from "./helpers";
import AppContext from './store/context';
import { IStoreDataModules } from "./store/types";


function App() {
  // const defaultAppContextValue = useAppContextValue();
  const [data, setData] = useState<IStoreDataModules>();
  const [isLoading, setIsLoading] = useState(false);
  
  const getData = useCallback(async() => {
      setIsLoading(true);

      async function getResp() {
        const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        return response.data
      }

      async function mapProperties() {
        let response = await getResp();
        let currencyData = mapRespToCurrObj(response);
        console.log(currencyData);
        let graphData = mapRespToGraphObj();
        let finalDataFormat = mapArraysToStoreObject(currencyData, graphData);

        return finalDataFormat
      }

      setData(await mapProperties())
      console.log("should have set data")

      setIsLoading(false);
  }, [setData]);

  return (
    <AppContext.Provider value={{
      data,
      isLoading,
      getData}}
      >
    <Main />
  </AppContext.Provider>
  );
}

export default App;
