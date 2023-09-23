

const FavoritesCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price } = phone || {};
  return (
   
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h5>
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            ${price}
          </h6>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Introducing the {phone_name}, a cutting-edge smartphone that
            seamlessly blends innovation, style, and performance to elevate your
            mobile experience like never before. Crafted with precision and
            designed with your needs in mind, the ${phone_name} is here to
            redefine connectivity.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Remove
          </button>
        </div>
      </div>
    
  );
};

export default FavoritesCard;
