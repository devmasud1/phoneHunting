const PhoneCard = ({ phone }) => {
  const { id, image, phone_name, brand_name, price } = phone || {};

  const handleAddToCart = () => {
    const addedCartArray = [];
    console.log(addedCartArray);

    const cartItem = JSON.parse(localStorage.getItem("cart"));

    if (!cartItem) {
      addedCartArray.push(phone);

      localStorage.setItem("cart", JSON.stringify(addedCartArray));
      alert("product added");
    } else {
      const isExits = cartItem.find((ph) => ph.id === id);

      if (!isExits) {
        addedCartArray.push(...cartItem, phone);
        localStorage.setItem("cart", JSON.stringify(addedCartArray));
        alert("product added");
      } else {
        alert("already added");
      }
    }
  };

  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="relative flex w-full max-w-[58rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {phone_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {brand_name}
          </h4>
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            ${price}
          </h6>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Introducing the {phone_name}, a cutting-edge smartphone that
            seamlessly blends innovation, style, and performance to elevate your
            mobile experience like never before. Crafted with precision and
            designed with your needs in mind, the ${phone_name} is here to
            redefine connectivity.
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleAddToCart}
            >
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
