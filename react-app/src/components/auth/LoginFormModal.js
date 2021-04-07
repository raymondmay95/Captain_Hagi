import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Modal } from "../ModalProvider";
import LoginForm from "./LoginForm";

function LoginFormModal({ authenticated, setAuthenticated }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(true)} children={LoginForm}>
          <LoginForm
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
          <div>
            <NavLink to="/sign-up" onClick={() => setShowModal(false)}>
              Sign Up here
            </NavLink>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
