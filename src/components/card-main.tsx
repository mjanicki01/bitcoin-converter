import CardBottom from "./card-bottom"
import CardTop from "./card-top"
import "../styles/card.css"
import { Currencies } from "../helpers"


type CardMainProps = {
    currency: Currencies,
    bottomCardData?: any
}

const CardMain = ({ currency, bottomCardData }: CardMainProps) => {

    return (
        <div className="card-main">
            <CardTop currency={currency}/>
            <CardBottom rate={123} currency={currency} />
        </div>
    )
}

export default CardMain