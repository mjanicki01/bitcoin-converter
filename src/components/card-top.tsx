
type CardTopProps = {
    currency: any;
}

const CardTop = ({ currency }: CardTopProps) => {

    // setInterval(() => {
    //     // Math.random() * rate
    //   const resp = getTempData(currency, 1);
    //   setData(JSON.stringify(resp));
    // }, 10000)


    return (
        <div className="card-top">
            <span><h4>{currency.description}</h4></span>
            <span><h2>{currency.rate_float}</h2><h4>{currency.symbol}</h4></span>
        </div>
    )
}

export default CardTop
