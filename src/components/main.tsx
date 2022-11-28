// add graph modal:
// - import graph component & map over state to create 3x graphs, set display: false
// - center over all other elements
// - useState & useEffect for each modal display (boolean) & if each input is disabled (boolean)

// add grid:
// - 1x div per cell containing card-main
// - iterate over currencies object to create a card-main for each currency card
// include timestamp for last GET request in bottom right hand corner of screen
// include disclaimer from JSON response somewhere (?)



// Consume in app

import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../store/context";
import CardMain from "./card-main";
//import { IStoreData } from "./types";

// const FetchData = () => {
//   // Grab data from useAPI in global context
//   const { data, isLoading } = useAPI();


const Main = () => {

  const useRefreshData = () => {
    const { getData } = useContext(AppContext);
   
    useEffect(() => {
      getData?.();
    }, [getData])
  }

  const { data } = useContext(AppContext);
  useRefreshData();

  // const {currencyData, graphData} = useContext(AppContext);

  console.log(data!.currencyData, data!.graphData)

  return (
    <>
      <div>
        <h1>"Main component"</h1>
        {/* <div>{!isLoading ? <p>{data[0].category}</p> : <p>Loading...</p>}</div> */}
      </div>
      <CardMain topCardData={data!.currencyData}/>
    </>
  );
};


export default Main