// add graph modal:
// - import graph component & map over state to create 3x graphs, set display: false
// - center over all other elements
// - useState & useEffect for each modal display (boolean) & if each input is disabled (boolean)

// add grid:
// - 1x div per cell containing card-main
// - iterate over currencies object to create a card-main for each currency card
// include timestamp for last GET request in bottom right hand corner of screen
// include disclaimer from JSON response somewhere (?)


import { useEffect, useState } from "react";
import { mapProperties } from "../helpers";
import CardMain from "./card-main";


const Main = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();

  const firstLoad = async () => {
      const resp = await mapProperties();
      setData(JSON.stringify(resp));
      localStorage.setItem('Data', JSON.stringify(data));
      setLoading(false);
  };

  const checkLocalStorage = () => {
    if (!localStorage.getItem('Data')) {
     setData(data);
    } else {
      firstLoad()
    }
  }

  checkLocalStorage();

  //firstLoad();

  setInterval(async () => {
      const resp = await mapProperties();
      setData(JSON.stringify(resp));
  }, 10000)

  useEffect(() => {
      localStorage.setItem('Data', JSON.stringify(data));
  }, [data]);



  return (
    <>
      <div>
        <h1>"Main component"</h1>
        {loading ?
          <p>Loading...</p> :
          <div>
      <CardMain topCardData={data} />
      </div>
        }
      </div>
    </>
  );
};


export default Main