import ModalGraph from "./modal";
import { useModal } from "../useModal";
import { IDefaultValue } from "../App";
import { PropsWithChildren, useState } from "react";
import { convertRateToUSD } from "../helpers";

interface CardProps {
  currency: IDefaultValue;
}

const CurrencyCard = ({ children }: PropsWithChildren<{}>) => {
  return <div className="card-main">{children}</div>;
};

const CardTop = ({ currency }: CardProps) => {
  const { isShowing, toggle } = useModal();
  const currencyFormatConverter = Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  });
  const formatRate = (rate: number) => currencyFormatConverter.format(rate);

  return (
    <>
      <div className="modal-main">
        <ModalGraph currency={currency} isShowing={isShowing} hide={toggle} />
      </div>

      <div className="card-top" onClick={toggle}>
        <h4>{currency.description}</h4>
        <span id="currency-rate-display">
          {formatRate(currency.rate_float)} {currency.symbol}
        </span>
      </div>
    </>
  );
};

const CardBottom = ({ currency }: CardProps) => {
  const [inputQty, setQty] = useState(0);
  const [returnValue, setReturnValue] = useState("BTC");

  const handleChange = (e: any) => {
    setQty(e.target.value);
  };

  const handleSubmit = (e: any) => {
    if (!isNaN(inputQty)) {
      e.preventDefault();
      setReturnValue(convertRateToUSD(currency.rate_float, inputQty));
    } else {
      e.preventDefault();
      setReturnValue("Please enter a valid input");
    }
  };

  return (
    <>
      <div className="card-bottom">
        <div className="input-section">
          <form onSubmit={handleSubmit}>
            <label>
              Convert to Bitcoin:
              <input
                id="qty"
                type="text"
                value={inputQty}
                onChange={handleChange}
                placeholder={currency.code}
                disabled={false}
              />
            </label>
            <input type="submit" value="Convert" />
          </form>
        </div>
        <div id="converted-value-section">{returnValue}</div>
      </div>
    </>
  );
};

CurrencyCard.Top = CardTop;
CurrencyCard.Bottom = CardBottom;

export { CurrencyCard };
