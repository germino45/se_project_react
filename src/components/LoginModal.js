import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ isOpen, onClose, onSubmitClick, onRedirectClick }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitClick({ email, password });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Log In"
      buttonSubmitText="Log In"
      buttonRedirectText="or Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onRedirectClick={onRedirectClick}
      name="login">
      <label>
        Email<br></br>
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
          minLength="2"
          value={email}
          onChange={handleEmailChange}></input>
      </label>
      <br></br>
      <label>
        Password<br></br>
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="8"
          value={password}
          onChange={handlePasswordChange}></input>
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
