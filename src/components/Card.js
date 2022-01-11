
function Card({ card, index, setChoise, disabled }) {

    const handleClick = (index) => {
        setChoise( index )
    }
    return (
        <button className={`card ${card.choise && "open"} ${card.equal && "matched"} ${disabled && "button-disabled"}`}  onClick={() => handleClick(index)} disabled={disabled}  >
            <img src={card.image} alt={card.name}/>
        </button>
    )
}

export default Card
