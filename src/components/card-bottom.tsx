import { useState } from "react";
import { convertRateToUSD } from "../helpers/helpers";
import useModal from "../helpers/useModal";


type CardBottomProps = {
    currency: any;
    rate: number;
}

const CardBottom = ({ currency, rate }: CardBottomProps) => {

    const [qty, setQty] = useState(0);
    const [returnValue, setReturnValue] = useState("BTC");

    const handleChange = (e: any) => {
        setQty(e.target.value);
    }

    const handleSubmit = (e: any) => {
        if (!isNaN(qty)) {
            e.preventDefault();
            setReturnValue(convertRateToUSD(currency.rate_float, qty))
        } else {
            e.preventDefault();
            setReturnValue("Please enter a valid input")
        }
    }


    return (
        <>

            <div className="card-bottom">

                <div className="input-section">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Convert to Bitcoin:
                            <input id="qty" type="text" value={qty} onChange={handleChange} placeholder="USD" disabled={false} />
                        </label>
                        <input type="submit" value="Convert" />
                    </form>
                </div>

                <div id="converted-value-section">
                    {returnValue}
                </div>

            </div>
        </>
    )
}

export default CardBottom