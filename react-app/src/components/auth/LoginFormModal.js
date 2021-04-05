import React, { useState } from "react";
import { Modal } from "../ModalProvider";
import LoginForm from "./LoginForm";

function LoginFormModal({ authenticated, setAuthenticated }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} children={LoginForm}>
          <LoginForm
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
