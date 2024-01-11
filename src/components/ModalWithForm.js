const ModalWithForm = ({
  name,
  title,
  children,
  buttonText,
  onClose,
  onSubmit,
}) => {
  console.log("modalwithform");

  return (
    <div className={`modal`}>
      <div className={`modal__content modal__content_type_${name}`}>
        <button
          type="button"
          onClick={onClose}
          className="modal__close-btn"></button>
        <h3 className="modal__header">{title}</h3>
        <form className="form" onSubmit={onSubmit}>
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
