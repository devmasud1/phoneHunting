import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
   <div className="shadow-md py-4">
     <div className="flex justify-between items-center max-w-[1440px] mx-auto">
      <div>
        <h2 className="text-3xl font-bold">
          Phone<span className="text-orange-500">Hunting</span>
        </h2>
      </div>
      <div>
        <nav>
          <ul className="flex gap-5">

            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-600 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/favorites"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-600 underline"
                    : ""
                }
              >
                Favorites
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/logIn"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-orange-600 underline"
                    : ""
                }
              >
                LogIn
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
   </div>
  );
};

export default NavBar;
