// top contains currency symbol & BC -> Currency value display
// useEffect to change display of values when global state changes
// if new state value is different from current state value, trigger CSS animation

import { useContext, useEffect } from "react";
import { ICurrencyData } from "../store/types"



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