import CardBottom from "./card-bottom"
import CardTop from "./card-top"

type CardMainProps = {
    topCardData?: any,
    bottomCardData?: any
}

const CardMain = ({topCardData, bottomCardData}: CardMainProps) => {
    return (
    <div className="card-main">
        <CardTop currencyData={topCardData} />
        <CardBottom test={"test"} />
    </div>
    )
}

export default CardMain