// add graph modal:
// - import graph component & map over state to create 3x graphs, set display: false
// - center over all other elements
// - useState & useEffect for each modal display (boolean) & if each input is disabled (boolean)

// add grid:
// - 1x div per cell containing card-main
// - iterate over currencies object to create a card-main for each currency card
// include timestamp for last GET request in bottom right hand corner of screen
// include disclaimer from JSON response somewhere (?)

import CardMain from "./card-main";
import "../styles/card.css"


const Main = () => {



  return (
    <>
      <div className="main">
        <div>
        <h1>Bitcoin Price Displayer + Simple Price Calculator</h1>
        </div>
        <div className="content">
          {[1, 2, 3].map((e) => {
           return (<div>
            <CardMain topCardData={"data"} />
          </div>)
        })
        }
        </div>
      </div>
    </>
  );
};


export default Main