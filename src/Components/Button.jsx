import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex items-center justify-center gap-2 px-7 py-4 border font-montserrat text-lg  leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <img
        src={iconUrl}
        alt="arrow right icon"
        className="h-5 w-5 rounded-full ml-2"
      />
    </button>
  );
};

export default Button;
