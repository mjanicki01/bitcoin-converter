import CardMain from "./card-main";
import "../styles/card.css"


const Main = () => {

  const returnedCurrencyPlaceholder = ["usd", "gbp", "eur"]

  return (
    <>
      <div className="main">
        <div>
          <h1>Bitcoin Price Displayer + Simple Price Calculator</h1>
        </div>
        <div className="content">
          {returnedCurrencyPlaceholder.map((e) => {
            return (<div key={e}>
              {/* @ts-ignore */}
              <CardMain currency={e}/>
            </div>)
          })
          }
        </div>
      </div>
    </>
  );
};


export default Main