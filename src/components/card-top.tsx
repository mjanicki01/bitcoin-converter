import { useEffect, useState, useContext } from "react";
import useModal from "../helpers/useModal";
import ModalGraph from "./modal-graph";
import { ValueContext } from "../App"

type CardTopProps = {
    currency: any;
}

const CardTop = ({ currency }: CardTopProps) => {

    const { isShowing, toggle } = useModal();
    const { state, update } = useContext(ValueContext);
    const converter = Intl.NumberFormat('en', { maximumFractionDigits: 2 });

    const formatRate = (rate: number) => {
        return converter.format(rate)
    }

    const getCurrency = (currency: string) => {
        switch(currency) {
            case "USD": return state.usdRate
            case "EUR": return state.eurRate
            case "GBP": return state.gbpRate
            default: return 0
        }
    }

    const currentCurrency = getCurrency(currency.code)
    const [rate, setRate] = useState(currentCurrency);

    const getRandomRate = (rate: any) => {
        setInterval(() => {
            setRate(rate * (Math.random() * (1.5 - 1) + 1))
            update(currentCurrency:rate)
            console.log(state)
        }, (1000 * (Math.random() * (360 - 30) + 30)))
    };

    getRandomRate(rate);



    return (
        <>
            <div className="modal-main">
                <ModalGraph currency={currency} isShowing={isShowing} hide={toggle} />
            </div>

            <div className="card-top" onClick={toggle}>
                <h4>{currency.description}</h4>
                <span id="currency-rate-display">{formatRate(rate)} {currency.symbol}</span>
            </div>
        </>
    )
}

export default CardTop
