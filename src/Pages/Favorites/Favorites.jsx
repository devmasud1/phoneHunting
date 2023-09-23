import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [phones, setPhones] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    if (cartItem) {
      setPhones(cartItem);
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  return (
    <div className="my-10">
      {notFound ? (
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          {notFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
            {isShow
              ? phones.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : phones
                  .slice(0, 3)
                  .map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
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
