const ItemCard = ({ card, onSelectCard }) => {
  return (
    <div className="card">
      <img
        src={card.imageUrl}
        alt="card"
        className="card__image"
        onClick={() => onSelectCard(card)}></img>
      <div className="card__text">{card.name}</div>
    </div>
  );
};

export default ItemCard;
