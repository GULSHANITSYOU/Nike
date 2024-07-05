import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full hover:cursor-pointer hover:-translate-y-4 hover:scale-[1.01] transition-[1s]  ">
      <img
        src={imgURL}
        alt="popular product card image"
        className="h-[280px] w-[280px]"
      />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="star" />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.{Math.floor(Math.random() * 10)})
        </p>
      </div>
       <h1 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h1>
      <p className="mt-2 font-semibold text-coral-red leading-normal text-2xl">{price}</p>
    </div>
  );
};

export default PopularProductsCard;
