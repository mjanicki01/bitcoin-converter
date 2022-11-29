// top contains currency symbol & BC -> Currency value display

import { useEffect } from "react";
import { ICurrencyData } from "../types"


type CardTopProps = {
    currencyData: any;
}

const CardTop = ({ currencyData }: CardTopProps) => {

    return (
    <div className="card-top">
        {currencyData}
    </div>
    )
}

export default CardTop