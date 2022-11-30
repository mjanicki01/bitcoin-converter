import { useState } from "react";


type CardBottomProps = {
    currency: string;
    rate: number;
}

const CardBottom = ({ currency, rate }: CardBottomProps) => {

    const [qty, setQty] = useState(undefined);
    const [returnValue, setReturnValue] = useState("12,224 BTC");

    const handleChange = (e: any) => {
        setQty(e.target.value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(qty)
    }



    return (
        <div className="card-bottom">

            <div className="input-section">
                <form onSubmit={handleSubmit}>
                    <label>
                        Convert to Bitcoin:
                        <input id="qty" type="text" value={qty} onChange={handleChange} placeholder="USD" />
                    </label>
                    <input type="submit" value="Convert" />
                </form>
            </div>

            <div id="converted-value-section">
                {returnValue}
            </div>

        </div>
    )
}

export default CardBottom