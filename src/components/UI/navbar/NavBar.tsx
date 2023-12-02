import React from "react";
import { navLinks } from "./links";
import { useOdontContext } from "../../../context/OdontContext";

export const NavBar = () => {
  const { state, toggleTheme } = useOdontContext();

  const themeClass = state.theme ? "light-theme" : "dark-theme";

  return (
    <nav className="flex items-center justify-between border-b-2 h-[100px] overflow-x-hidden">
      <div>
        <h1 className="font-bold text-[28px]">DH-Odontologia</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-gray-400 text-[20px] hover:text-gray-900 transition duration-300 py-2 px-3 rounded-md hover:bg-[#a1d1f6] "
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <label className="switch">
              <input type="checkbox" onClick={toggleTheme} />
              <span className="slider"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};
