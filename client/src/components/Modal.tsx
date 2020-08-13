import React, { useEffect } from 'react';

const Modal = () => {
  useEffect(() => {
    new Promise(resolve => {
      resolve(1);
    });
  }, []);
  return <div>Modal</div>;
};

export default Modal;
