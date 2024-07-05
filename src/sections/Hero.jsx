import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import Button from "../Components/Button";
import ShoesCard from "../Components/ShoesCard";
import { shoes, statistics } from "../constants";



const Hero = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full  gap-10 max-container flex xl:flex-row flex-col justify-center  min-h-screen">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82]  font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block  mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals. quality comfort. and innovation for
          your active life,
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start   flex-wrap w-full mt-20 gap-16">
          {statistics.map((state, index) => (
            <div key={state.label}>
              <p className="text-4xl font-palanquin font-bold">{state.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {state.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          className="object-contain relative z-10"
          src={bigShoeImg}
          alt="shoes collection"
          width={610}
          height={500}
        />

        <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%]  sm:left-[10%] max-sm:px-6">
          {shoes.map((shoes) => (
            <div key={shoes}>
              <ShoesCard
                imgURL={shoes}
                changeBigShoeImage={(shoe) => {setbigShoeImg(shoe)}}
                bigShoeImage= {bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
