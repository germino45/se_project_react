import React, { useState } from "react";

import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  isOpen,
  onSubmitClick,
  onRedirectClick,
  onClose,
  buttonSubmitText,
}) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  /* const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  }); */

  /* const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmitClick({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonSubmitText={buttonSubmitText}
      buttonRedirectText=" or Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onRedirectClick={onRedirectClick}
      name="register">
      <label>
        Email*<br></br>
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
        Password*<br></br>
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="8"
          value={password}
          onChange={handlePasswordChange}></input>
      </label>
      <br></br>
      <label>
        Name*<br></br>
        <input
          className="form__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="2"
          value={name}
          onChange={handleNameChange}></input>
      </label>
      <br></br>
      <label>
        Avatar URL*<br></br>
        <input
          className="form__input"
          type="url"
          name="avatar"
          placeholder="Avatar URL"
          value={avatar}
          onChange={handleAvatarChange}></input>
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
