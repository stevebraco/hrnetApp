import React from 'react';
import Modal from 'react-modal';
import { RiCloseCircleFill } from 'react-icons/ri';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const OpenModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <RiCloseCircleFill onClick={closeModal} />
      <div>Employee Created!</div>
    </Modal>
  );
};

export default OpenModal;
