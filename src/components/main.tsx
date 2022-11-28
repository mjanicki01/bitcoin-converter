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

import React from "react";
import { useContext } from "react";
import { AppCtx } from "../store/store";
//import { IStoreData } from "./types";

const Main = () => {

  const appContext = useContext(AppCtx);

  console.log(appContext?.currencyData[0])

  return (
    <>
      <div>
        <h1>"Main component"</h1>
      </div>
    </>
  );
};

export default Main