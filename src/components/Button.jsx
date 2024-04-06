import React from "react";

const Button = ({ disabled, onClick, text, active, currentPage }) => {

  const isPage67 = currentPage === 5 || currentPage === 6;

  return (
    <div className={`flex justify-center items-center ${isPage67 ? 'hidden' : ''}`}>
      <button
        className={`py-2 px-4 ${active ? 'bg-gray-500' : 'bg-black'} text-white`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;


