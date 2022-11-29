import { useState } from "react";


type CardBottomProps = {
    currency: string;
    rate: number;
}

const CardBottom = ({ currency, rate }: CardBottomProps) => {

    const [qty, setQty] = useState(0);

    const handleChange = (e: any) => {
        setQty(e.target.value);
      }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(qty)
    }


    return (
    <div className="card-bottom">
        <form onSubmit={handleSubmit}>
        <label>
          Qty:
          <input id="qty" type="text" value={qty} onChange={handleChange} />
        </label>
        <input type="submit" value="Convert" />
      </form>
    </div>
    )
}

export default CardBottom