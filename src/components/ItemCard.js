import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemCard = ({ card, onSelectCard, onCardLike, isLoggedIn }) => {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = card.likes.some((user) => user === currentUser?._id);
  const _id = card._id;

  const cardLikeButtonClassName = `${
    isLiked ? "card__like-button_active" : "card__like-button"
  }`;

  const handleCardLike = () => {
    onCardLike(_id, isLiked);
  };

  return (
    <div className="card">
      <img
        src={card.imageUrl}
        alt="card"
        className="card__image"
        onClick={() => onSelectCard(card)}></img>
      <div className="card__header">
        <div className="card__text">{card.name}</div>
        {isLoggedIn ? (
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}></button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
