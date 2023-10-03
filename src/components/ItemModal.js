const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn modal__close-btn_type_image"></button>
        <img src={selectedCard.link} alt="item" className="modal__image" />
        <p className="modal__image-text">{selectedCard.name}</p>
        <p className="modal__image-text">weather: {selectedCard.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
