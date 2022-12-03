import Link from "next/link";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  

  const menuOpen = () => {
    const navbar = document.querySelector("#navbar-mobile");
    navbar?.classList.toggle("hidden");
  };

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        // downscroll code
        console.log('down')
      } else {
        // upscroll code
        console.log('up')
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <nav className="flex w-screen items-center bg-white py-4 px-4 fixed z-50 top-0">
        <div className="flex w-2/4">
          <h1 className="font-bold text-2xl text-black cursor-default">
            Portfolio {scrollTop}
          </h1>
        </div>
        <div className="">
        </div>
        <div className="flex justify-center w-2/4 text-lg max-sm:hidden">
          <Link className="flex px-6 text-black" href={"/"}>
            Home
          </Link>
          <Link
            className="flex px-6 text-gray-600 hover:text-black ease-in-out duration-100"
            href={"/about"}
          >
            About
          </Link>
          <Link
            className="flex px-6 text-gray-600 hover:text-black ease-in-out duration-100"
            href={"/project"}
          >
            Project
          </Link>
          <Link
            className="flex px-6 text-gray-600 hover:text-black ease-in-out duration-100"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
        {/* Mobile Button */}
        <div className="w-2/4 justify-end hidden max-sm:flex">
          <AiOutlineMenu className="text-4xl" onClick={menuOpen} />
        </div>
        {/* Mobile Menu */}
      </nav>
      <div
        className="flex hidden top-16 fixed z-10 w-screen bg-white shadow-md flex-col justify-center items-center sm:hidden"
        id="navbar-mobile"
      >
        <Link className="flex px-6 text-black" href={"/"}>
          Home
        </Link>
        <Link
          className="flex px-6 text-gray-600 hover:text-black ease-in-out duration-100"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="flex px-6 text-gray-600 hover:text-black ease-in-out duration-100"
          href={"/project"}
        >
          Project
        </Link>
        <Link
          className="flex px-6 text-gray-600 hover:text-black ease-in-out duration-100"
          href={"/contact"}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
