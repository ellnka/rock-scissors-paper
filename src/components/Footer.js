import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
    const [modalState, setModalState] = useState("closed");

    const showModal = () => {
        setModalState("opened");
    }

    return (
        <div className="footer">
            {modalState === "opened" && <Modal setModalState = {setModalState}></Modal>}
            <button className="btn-rules" onClick={showModal}>
                Rules
            </button>
        </div>
    );
}

export default Footer;