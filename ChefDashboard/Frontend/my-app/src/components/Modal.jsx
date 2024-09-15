import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-4 md:p-6 rounded-lg shadow-lg w-full max-w-4xl mx-4 md:mx-8 max-h-[90vh] overflow-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
