import axios from "axios";
import { createContext, useCallback, useState } from "react";
import { mapArraysToStoreObject, mapRespToGraphObj, mapRespToCurrObj } from "../helpers";
import { BcConversion, IStoreData, IStoreDataModules } from "./types";

// Provider in app

const defaultAppContextValue: IStoreData = {
    isLoading: false,
    getData: () => null,
    data: {}
}

const AppContext = createContext<IStoreData>(defaultAppContextValue);

export default AppContext

// const useAppContextValue = () => {
//     const [data, setData] = useState<IStoreDataModules>();
//     const [isLoading, setIsLoading] = useState(false);
    
//     const getData = useCallback(() => {
//         setIsLoading(true);
//         axios
//         .get<BcConversion>("https://api.coindesk.com/v1/bpi/currentprice.json")
//         .then((response) => {
//             console.log(response)
//             let currencyData = mapRespToCurrObj(response);
//             let graphData = mapRespToGraphObj();
//             setData(mapArraysToStoreObject(currencyData, graphData))
//         })
//         .finally(() => {
//             console.log("should have set data")
//             setIsLoading(false);
//         })
//     }, [setData]);

    
//     return {
//         data,
//         isLoading,
//         getData,
//     }
// };

// export default useAppContextValue