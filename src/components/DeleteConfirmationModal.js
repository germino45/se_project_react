const DeleteConfirmationModal = ({ onClose, onCancel, onCardDelete }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content modal__content_type_delete">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn"></button>
        <p className="modal__delete-text">
          Are you sure you want to delete this item? this action is
          irreversible.
        </p>
        <button
          type="submit"
          onClick={onCardDelete}
          className="modal__button modal__delete-item-btn">
          Yes, delete item
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="modal__button modal__cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
