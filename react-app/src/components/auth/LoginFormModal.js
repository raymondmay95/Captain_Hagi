import React, { useState } from "react";
import { Modal } from "../ModalProvider";
import LoginForm from "./LoginForm";

function LoginFormModal({ authenticated, setAuthenticated }) {
  const [showModal, setShowModal] = useState(true);

  const styles = {
    background: `url(${"https://www.hdwallpaper.nu/wp-content/uploads/2015/07/Ocean-wave-stock-image_WEB.jpg"})`,
  };
  return (
    <>
      <div className={styles}>
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
      </div>
    </>
  );
}

export default LoginFormModal;
