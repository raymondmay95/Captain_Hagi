import React, { useState } from "react";
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
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
