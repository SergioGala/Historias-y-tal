// src/components/UI/Modal/index.js
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContent, CloseButton } from './styles';

const Modal = ({ 
  isOpen, 
  onClose, 
  children,
  variant = 'default',
  dark = false
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay 
      onClick={onClose}
      variant={variant}
    >
      <ModalContent 
        variant={variant}
        $dark={dark}
        onClick={e => e.stopPropagation()}
      >
        <CloseButton 
          onClick={onClose}
          $dark={dark}
          aria-label="Close modal"
        >
          ×
        </CloseButton>
        {children}
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default Modal;