import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Datoriile Mele", target: "datorii" },
    { title: "Datorii Mei", target: "datori" },
    { title: "Logout", spacing: true, target: "logout" },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <a href="/">
          <div className="inline-flex">
            <BiUser
              className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration 300 ${
                !open && "scale-0"
              }`}
            >
              Andrei
            </h1>
          </div>
        </a>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <a href={menu.target}>
                <li
                  key={index}
                  href="/test"
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                    menu.spacing ? "mt-9" : "mt-2"
                  } `}
                >
                  <span>
                    <RiDashboardFill />
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </a>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
