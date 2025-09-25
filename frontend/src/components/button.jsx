import React from "react";

const Button = ({ text, type = "button", onClick, className = "", disabled = false, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
