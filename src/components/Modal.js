import React from 'react';

const Modal = ({setModalState}) => {
    const closeModal = () => {
        setModalState("closed");
    }

    return (
        <div className="modal rules-modal">
            <div className="modal__title">Rules</div>
            <button className="modal__close" onClick={closeModal}></button>
        </div>
    );
}

export default Modal;