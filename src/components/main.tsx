import CardMain from "./card-main";
import "../styles/card.css"
import { seedData } from "../seed";


const Main = () => {

  return (
    <>
      <div className="main">
        <div className="content">

          <div className="header">
            <h1>Bitcoin Price Displayer + Simple Price Calculator</h1>
          </div>

          <div className="card-container">
            {seedData.map((e, i) => {
              return (<div key={i}>
                {/* @ts-ignore */}
                <CardMain currency={e} />
              </div>)
            })}
          </div>
        </div>
      </div >
    </>
  );
};


export default Main