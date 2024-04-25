import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ItemCard from "./ItemCard";

const ClothesSection = ({
  onSelectCard,
  onCreateModal,
  clothingItems,
  isLoggedIn,
  onCardLike,
  currentUserCards,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile__group">
      <div className="profile__header">
        <h2 className="profile__header-text">Your items</h2>
        <button
          type="button"
          className="profile__add-clothes-button"
          onClick={onCreateModal}>
          + Add new
        </button>
      </div>
      <section className="card__section">
        <ul className="cards profile__cards">
          {clothingItems.map((card) => {
            const isOwn = card.owner === currentUser._id;
            if (isOwn) {
              return (
                <ItemCard
                  isLoggedIn={isLoggedIn}
                  key={card._id}
                  card={card}
                  onSelectCard={onSelectCard}
                  onCardLike={onCardLike}
                />
              );
            } else return null;
          })}
        </ul>
      </section>
    </div>
  );
};

export default ClothesSection;
