const ModalWithForm = ({ name, title, children, buttonText, onClose }) => {
  console.log("modalwithform");

  return (
    <div className={`modal`}>
      <div className={`modal__content modal__content_type_${name}`}>
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn modal__close-btn_type_form"></button>
        <h3 className="modal__header">{title}</h3>
        <form className="form">
          <fieldset className="form__fieldset">
            {children}
            <button type="submit" className="form__submit-btn">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
