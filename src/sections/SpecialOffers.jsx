import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffers = () => {
  return (
    <section className="max-container flex  items-center  justify-wrap max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer image"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div>
        <h1 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red "> Special </span>
          Offers
        </h1>

        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button label="Learn more" bagroundColor = "bg-white" borderColor = "border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
