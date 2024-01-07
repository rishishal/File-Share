"use client";
import Image from "next/image";
import { useState } from "react";
import { menuList } from "./NavData";
import Link from "next/link";

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='shadow-sm border-r h-full'>
      <div className='p-5 border-b'>
        <Image src='/logo.svg' alt='logo' width={60} height={60} />
      </div>
      <div className='flex flex-col float-left w-full'>
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <button
              key={index}
              className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full
             text-gray-500
             ${activeIndex == index ? "bg-blue-50 text-primary" : null}`}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SideNav;
