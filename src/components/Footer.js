import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
    const [modalState, setModalState] = useState("closed");

    const showModal = () => {
        setModalState("opened");
    }

    return (
        <div>
            <div className="footer">
                <button className="btn-rules" onClick={showModal}>
                    Rules
                </button>
            </div>
            {modalState === "opened" && <Modal setModalState = {setModalState}></Modal>}
        </div>
    );
}

export default Footer;