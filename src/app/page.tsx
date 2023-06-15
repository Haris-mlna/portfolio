"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";
import { Carousel } from "antd";

import { HeroSVG } from "@/assets/image/heroSVG";

import styles from "../styles/home.module.css";
import buttonStyles from "../styles/button.module.css";

export default function Home() {
  const [toggleMode, setToggleMode] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init();

    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      const buttonContact = document.getElementById(
        "contactContainer"
      ) as HTMLElement;
      const buttonToggle = document.getElementById(
        "toggleButton"
      ) as HTMLElement;

      if (buttonContact && buttonToggle) {
        if (currentScrollPosition > lastScrollPosition) {
          buttonContact.style.bottom = "-100px";
          buttonToggle.style.right = "-100px";
        } else {
          buttonContact.style.bottom = "20px";
          buttonToggle.style.right = "10px";
        }
        setLastScrollPosition(currentScrollPosition);
      }
    }

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  const toggleButton = () => {
    const svgHero = document.querySelectorAll("#color_mainSVG");
    if (toggleMode === true) {
      document.documentElement.style.setProperty("--color-background", "white");
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty(
        "--toggle-color",
        "rgb(100, 199, 255)"
      );
      document.documentElement.style.setProperty(
        "--color-background-accent",
        "#F0F0F0"
      );
      svgHero.forEach(function (element) {
        element.setAttribute("fill", "#3EC9DC");
      });
      setToggleMode(false);
    } else {
      document.documentElement.style.setProperty(
        "--color-background",
        "rgb(24, 24, 24)"
      );
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--toggle-color", "yellow");
      svgHero.forEach(function (element) {
        element.setAttribute("fill", "#6C63FF");
      });
      document.documentElement.style.setProperty(
        "--color-background-accent",
        "#121212"
      );
      setToggleMode(true);
    }
  };

  const toggleContact = (route : string) => {
    window.location.href = route;
  };
  

  return (
    <>
      <Head>{/* Add necessary meta tags, title, etc. */}</Head>
      <main>
        <button
          id="toggleButton"
          className={buttonStyles.toggleMode}
          onClick={toggleButton}
        >
          {toggleMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <div className={buttonStyles.contactContainer} id="contactContainer">
          <button
            className={`${buttonStyles.contact} ${buttonStyles.contactInstagram}`}
            onClick={() => {
              toggleContact('https://www.instagram.com/harismlnaslm')
            }}
          >
            <AiFillInstagram />
          </button>
          <button
            className={`${buttonStyles.contact} ${buttonStyles.contactTwitter}`}
          >
            <AiOutlineTwitter />
          </button>
          <button
            className={`${buttonStyles.contact} ${buttonStyles.contactGithub}`}
          >
            <AiFillGithub />
          </button>
        </div>
        <header className={styles.hero}>
          <h1 className={styles.heroIntro}>
            {`Hello!, I'm Haris Maulana, `}
            <br />a proficient Front-end Engineer
          </h1>
        </header>
        <section className={styles.profile}>
          <h2 className={styles.profileTitle}>PROFILE</h2>
          <div className={styles.profileInfoContainer}>
            <div className={styles.svgProfileContainer}>
              <HeroSVG />
            </div>
            <div>
              <p></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
