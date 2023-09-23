import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [phones, setPhones] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    if (!cartItem || cartItem.length === 0) {
      setNotFound("No Data Found");
    } else {
      setPhones(cartItem);
    }
  }, []);

  const handleRemove = (id) => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart"));

    const itemToRemove = localStorageCart.find((item) => item.id === id);

    if (itemToRemove) {
      localStorage.removeItem(String(id));

      const updatedCart = localStorageCart.filter((item) => item.id !== id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setPhones(updatedCart);

      if (updatedCart.length === 0) {
        setNotFound("No Data Found");
      }
    }
  };

  return (
    <div className="my-10">
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center text-2xl font-bold">
          {notFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
            {isShow
              ? phones?.map((phone) => (
                  <FavoritesCard
                    key={phone.id}
                    phone={phone}
                    handleRemove={handleRemove}
                  ></FavoritesCard>
                ))
              : phones
                  .slice(0, 3)
                  ?.map((phone) => (
                    <FavoritesCard
                      key={phone.id}
                      phone={phone}
                      handleRemove={handleRemove}
                    ></FavoritesCard>
                  ))}
          </div>
          {phones.length > 2 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-[150px] flex mx-auto items-center justify-center "
              data-ripple-light="true"
            >
              {isShow ? "see less" : "see more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
