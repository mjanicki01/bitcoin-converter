// bottom contains the input field & USD -> BC output display
// import USD -> BC conversion helper

type CardBottomProps = {
    test: string
}

const CardBottom = ({ test }: CardBottomProps) => {
    return (
    <div className="card-bottom">
        <p>{test}</p>
    </div>
    )
}

export default CardBottom