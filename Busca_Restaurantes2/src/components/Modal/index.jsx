import React, { useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './styles';

const Modal = ({ children, open, onClose}) => {
  useEffect(() => {
    function onEsc(e){
      if (e.keyCode == 27) onClose();
    }
    window.addEventListener('Keydown', onEsc);

    return () => {
      window.removeEventListener('Keydown', onEsc);
    };
  }, [onClose]);  

  if (!open) return null;

  function onOverlayClick(){
    onClose();
  }

  function OnDialogClick(e) {
    e.stopPropagation(); 
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={OnDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;