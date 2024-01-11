import ItemCard from "./ItemCard";

const ClothesSection = ({ onSelectCard, onCreateModal, clothingItems }) => {
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
        <div className="cards profile__cards">
          {clothingItems.map((card) => (
            <ItemCard key={card._id} card={card} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ClothesSection;
