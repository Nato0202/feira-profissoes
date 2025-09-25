import React from "react";

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  className = "", 
  required = false,
  ...props 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      required={required}
      {...props}
    />
  );
};

export default Input;
