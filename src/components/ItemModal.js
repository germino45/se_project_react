const ItemModal = ({ selectedCard, onClose, onClick }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn modal__close-btn_type_image"></button>
        <img src={selectedCard.imageUrl} alt="item" className="modal__image" />
        <div className="modal__info">
          <p className="modal__image-text-one">{selectedCard.name}</p>
          <p className="modal__image-text-two">
            weather: {selectedCard.weather}
          </p>
          <button type="button" className="modal__delete-btn" onClick={onClick}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
