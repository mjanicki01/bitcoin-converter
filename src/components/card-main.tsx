import CardBottom from "./card-bottom"
import CardTop from "./card-top"
import "../styles/card.css"


type CardMainProps = {
    currency: any,
}

const CardMain = ({ currency }: CardMainProps) => {

    return (
        <div className="card-main">
            <CardTop currency={currency}/>
            <CardBottom rate={currency.rate_float} currency={currency} />
        </div>
    )
}

export default CardMain