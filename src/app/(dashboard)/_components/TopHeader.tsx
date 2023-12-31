"use client";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";
import { menuList } from "./NavData";
import Link from "next/link";
import "./Navbar.css";

const TopHeader = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className='flex p-5 border-b items-center justify-between md:justify-end'>
        <Link href='#' className='menu-bars md:hidden'>
          <AlignJustify onClick={showSidebar} />
        </Link>
        <UserButton afterSignOutUrl='/' />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link href='#' className='menu-bars'>
              <X />
            </Link>
          </li>
          {menuList.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full
             text-gray-500
             ${activeIndex == index ? "bg-blue-50 text-primary" : null}`}
                onClick={() => setActiveIndex(index)}
              >
                <Link href={item.path}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default TopHeader;
