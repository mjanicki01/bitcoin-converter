

type CardBottomProps = {
    currency: string;
    rate: number;
}

const CardBottom = ({ currency, rate }: CardBottomProps) => {

    return (
    <div className="card-bottom">
        <div>USD</div>
        <form>
            <input type="text" id="input" name={currency}></input>
        </form>
    </div>
    )
}

export default CardBottom