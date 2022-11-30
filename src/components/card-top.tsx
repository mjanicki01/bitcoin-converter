import useModal from "../helpers/useModal";
import ModalGraph from "./modal-graph";

type CardTopProps = {
    currency: any;
}

const CardTop = ({ currency }: CardTopProps) => {

    const { isShowing, toggle } = useModal();

    const converter = Intl.NumberFormat('en', { maximumFractionDigits: 2 });

    // setInterval(() => {
    //     // Math.random() * rate
    //   const resp = getTempData(currency, 1);
    //   setData(JSON.stringify(resp));
    // }, 10000)

    const formatRate = (rate: number) => {
        return converter.format(rate)
    }


    return (
        <>
            <div className="modal-main">
                <ModalGraph currency={currency} isShowing={isShowing} hide={toggle} />
            </div>

            <div className="card-top" onClick={toggle}>
                <h4>{currency.description}</h4>
                <span id="currency-rate-display">{formatRate(currency.rate_float)} {currency.symbol}</span>
            </div>
        </>
    )
}

export default CardTop
