import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onClick }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button_visible" : "modal__delete-button_invisible"
  }`;

  return (
    <div className={"modal"}>
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn modal__close-btn_type_image"
        />
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="modal__info">
          <p className="modal__image-text-one">{selectedCard.name}</p>
          <p className="modal__image-text-two">
            weather: {selectedCard.weather}
          </p>
          <button
            type="button"
            className={itemDeleteButtonClassName}
            onClick={onClick}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
