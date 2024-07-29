import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const NavLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
//   const theme = "dark";
  return (
    <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
      <div className="container md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif">
              <span className="text-primary">Tour Zarkazi</span>
              <span className="text-slide-700"> Trans</span>
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a
                    className="inline-block p-2 hover:border-b-2 hover:border-primary hover:text-primary transition-colors duration-300 text-lg font-medium"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <BiSolidSun 
              onClick={()=> setTheme("light")}
              className="text-2xl" />
            ) : (
              <BiSolidMoon onClick={()=>setTheme("dark")} className="text-2xl" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
