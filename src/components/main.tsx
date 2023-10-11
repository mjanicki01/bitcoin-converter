import { CurrencyCard } from "./card";
import { useContext, useEffect } from "react";
import { rateContext } from "../App";

const Main = () => {
  const { state, setState } = useContext(rateContext);

  useEffect(() => {
    const changeRates = setInterval(() => {
      const newState = state.map((currency) => {
        return {
          ...currency,
          rate_float: currency.rate_float * (Math.random() * (1.5 - 1) + 1),
        };
      });
      setState(newState);
    }, 1000 * (Math.random() * (360 - 30) + 30));

    return () => clearInterval(changeRates);
  }, [state, setState]);

  console.log("here!")

  return (
    <>
      <div className="main">
        <div className="content">
          <div className="header">
            <h1>Bitcoin Price Displayer + Simple Price Calculator</h1>
          </div>

          <div className="card-container">
            {state.map((curr) => {
              return (
                <div key={curr.code}>
                  <CurrencyCard.Top currency={curr} />
                  <CurrencyCard.Bottom currency={curr} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
