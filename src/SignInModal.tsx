import React from 'react';
import Modal from './Modal.tsx'; // Import your Modal component
import AuthChecker from './auth/AuthChecker.tsx'; // Import your AuthChecker component

const SignInModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <AuthChecker />
    </Modal>
  );
};

export default SignInModal;