const ModalWithForm = ({
  name,
  title,
  children,
  buttonSubmitText,
  buttonRedirectText,
  onClose,
  onSubmit,
  onRedirectClick,
}) => {
  return (
    <div className={`modal`}>
      <div className={`modal__content modal__content_type_${name}`}>
        <button type="button" onClick={onClose} className="modal__close-btn" />
        <h3 className="modal__header">{title}</h3>
        <form className="form" onSubmit={onSubmit}>
          <fieldset className="form__fieldset">
            {children}
            <div
              className={`form__button-group form__button-group_type_${name}`}>
              <button
                type="submit"
                className={`form__submit-btn form__submit-btn_type_${name}`}>
                {buttonSubmitText}
              </button>
              <button
                type="button"
                className="form__redirect-btn"
                onClick={onRedirectClick}>
                {buttonRedirectText}
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
