import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const togglePolicyMenu = () => {
    setIsPolicyOpen(!isPolicyOpen);
  };

  return (
    <div className="bg-[#06426d] text-gray-100 text-sm sm:text-xl text-center flex gap-4 sm:gap-10 p-2 md:px-20 m-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer text-white hover:text-gray-300 border-b-2 border-white pb-1"
            : "cursor-pointer text-white hover:text-gray-300"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/savings"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer text-white hover:text-gray-300 border-b-2 border-white pb-1"
            : "cursor-pointer text-white hover:text-gray-300"
        }
      >
        Savings
      </NavLink>

      <NavLink
        to="/loan"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer text-white hover:text-gray-300 border-b-2 border-white pb-1"
            : "cursor-pointer text-white hover:text-gray-300"
        }
      >
        Loan
      </NavLink>

      {/* Policy with Nominee & Privacy as submenus */}
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsPolicyOpen(true)}
        onMouseLeave={() => setIsPolicyOpen(false)}
      >
        <span
          className="cursor-pointer text-white hover:text-gray-300 flex items-center gap-1"
          onClick={togglePolicyMenu}
        >
          Policy <span className="text-xs md:text-sm">▼</span>
        </span>

        {/* Submenu */}
        {isPolicyOpen && (
          <div className="absolute text-sm md:text-lg left-0 mt-1 w-20 md:w-32 bg-[#06426d] shadow-lg rounded-md">
            <NavLink
              to="/nominee"
              className="block py-2 text-white hover:bg-gray-600 hover:rounded-md"
            >
              Nominee
            </NavLink>
            <NavLink
              to="/privacy"
              className="block py-2 text-white hover:bg-gray-600 hover:rounded-md"
            >
              Privacy
            </NavLink>
          </div>
        )}
      </div>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer text-white hover:text-gray-300 border-b-2 border-white pb-1"
            : "cursor-pointer text-white hover:text-gray-300"
        }
      >
        About
      </NavLink>
    </div>
  );
};

export default Nav;
