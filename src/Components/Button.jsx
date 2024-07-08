import React from "react";

const Button = ({ label, iconUrl,bagroundColor,borderColor,textColor,fullwidth }) => {
  return (
    <button className={`flex items-center ${fullwidth && 'w-full'} justify-center gap-2 px-7 py-4 border font-montserrat text-lg  leading-none ${bagroundColor ? bagroundColor : "bg-coral-red"} rounded-full ${textColor?textColor:"text-white"} ${borderColor?borderColor:"border-coral-red"}`}>
      {label}
      {iconUrl ?<img
        src={iconUrl}
        alt="arrow right icon"
        className="h-5 w-5 rounded-full ml-2"
      /> : ""}
    </button>
  );
};

export default Button;
