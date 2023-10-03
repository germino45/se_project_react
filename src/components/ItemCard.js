const ItemCard = ({ x, onSelectCard }) => {
  return (
    <div className="card">
      <img
        src={x.link}
        alt="card"
        className="card__image"
        onClick={() => onSelectCard(x)}></img>
      <div className="card__text">{x.name}</div>
    </div>
  );
};

export default ItemCard;
