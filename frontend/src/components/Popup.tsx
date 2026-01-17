import Modal from 'react-modal';
import type { ReactNode } from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

Modal.setAppElement('#root');

function Popup({ isOpen, onClose, children }: PopupProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      overlayClassName="popup__overlay" 
      className="popup__content" 
    >
      {children}
    </Modal>
  );
}

export default Popup;