import Link from "next/link";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // Scroll Setter
  const [scrollTop, setScrollTop] = useState(0);
  // Navbar Checker
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    // THIS IS ONLY FOR MOBILE NOT DESKTOP
    const navMobile = document.querySelector<HTMLElement>("#navbar-mobile");
    if (navMobile !== null) {
      if (isOpen === false) {
        setIsOpen(true);
        navMobile.style.top = "68px";
      }
      if (isOpen === true) {
        setIsOpen(false);
        navMobile.style.top = "-320px";
      }
    }
  };

  useEffect(() => {
    // scroll navbar disappear function
    function onScroll() {
      let currentPosition = window.pageYOffset;
      const navbar = document.querySelector("nav");
      if (currentPosition > scrollTop) {
        // downscroll code
        if (navbar !== null) {
          navbar.style.top = "top-90";
        }
      } else {
        // upscroll code
        if (navbar !== null) {
          navbar.style.top = "0";
        }
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <>
      <nav className="flex w-screen items-center top bg-white py-4 px-4 fixed z-50 top-0 duration-300 ease-in-out shadow-sm">
        <div className="flex w-2/4">
          <h1 className="font-bold text-2xl text-black cursor-default">
            Portfolio
          </h1>
        </div>
        <div className=""></div>
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
        className="flex duration-1000 ease-in-out fixed z-40 w-screen bg-white shadow-md flex-col justify-center items-center sm:hidden"
        id="navbar-mobile"
      >
        <Link
          className="flex px-6 text-black/60 my-8 font-bold text-2xl"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="flex px-6 text-gray-600/60 hover:text-black ease-in-out duration-100 my-8 font-bold text-2xl"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="flex px-6 text-gray-600/60 hover:text-black ease-in-out duration-100 my-8 font-bold text-2xl"
          href={"/project"}
        >
          Project
        </Link>
        <Link
          className="flex px-6 text-gray-600/60 hover:text-black ease-in-out duration-100 my-8 font-bold text-2xl"
          href={"/contact"}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
