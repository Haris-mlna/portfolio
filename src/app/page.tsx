"use client";

import {FC, useEffect } from "react";
import styles from "../styles/home.module.css";
import button from "../styles/button.module.css";
import Image from "next/image";

// Components
import Straightlines from "@/components/Navbar/line";
import Footer from "@/components/Footer/footer";

// Icons
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { IoOpenOutline } from "react-icons/io5";

// loading page
import pageLoader from "@/components/Loading/pageLoader";

const Home : FC = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const contactContainer = document.querySelector(
        "#contactContainer"
      ) as HTMLElement;
      if (currentScrollTop > lastScrollTop && contactContainer !== null) {
        contactContainer.style.bottom = "-50px";
      } else {
        contactContainer.style.bottom = "20px";
      }

      lastScrollTop = currentScrollTop;
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  }, []);

  const donwloadCV = () => {
    const CV = "/object-01.pdf";
    window.open(CV, "_blank");
  };

  const handleContact = (link: string) => {
    window.open(link, "_blank");
  };

  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      <Straightlines />
      <div className={button.containerContact} id="contactContainer">
        <button
          className={`${button.contact} ${button.instagram}`}
          onClick={() => {
            handleContact("https://www.instagram.com/harismlnaslm/");
          }}
        >
          <AiFillInstagram />
        </button>
        <button
          className={`${button.contact} ${button.twitter}`}
          onClick={() => {
            handleContact("https://twitter.com/EngineerDazling");
          }}
        >
          <AiOutlineTwitter />
        </button>
        <button
          className={`${button.contact} ${button.linkedin}`}
          onClick={() => {
            handleContact(
              "https://www.linkedin.com/in/haris-maulana-57b06696/"
            );
          }}
        >
          <AiFillLinkedin />
        </button>
        <button
          className={`${button.contact} ${button.github}`}
          onClick={() => {
            handleContact("https://github.com/Haris-mlna");
          }}
        >
          <AiFillGithub />
        </button>
      </div>
      <header className={styles.hero}>
        <div className={styles.avatarContainer}>
          <div className={styles.layer} />
          <div className={styles.avatarWrapper}>
            <Image
              src={"/image/me.jpg"}
              alt="Haris Maulana"
              width={1080}
              height={1080}
              className={styles.avatar}
              id={"avatar"}
            />
          </div>
        </div>
        <span className={styles.avatarDesc}>{`Hi I'm Haris 👋`}</span>
        <h1 className={styles.heroIntro}>
          “Elevating User Experiences
          <br />
          with Code and Creativity”
        </h1>
        <button className={button.downloadcv} onClick={donwloadCV}>
          Download CV
        </button>
      </header>
      <div className={styles.adsContainer}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3618396639841980"
          crossOrigin="anonymous"
        ></script>
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client='ca-pub-3618396639841980'
          data-ad-slot='1707187230'
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <main className={styles.mainSection}>
        <section className={styles.sectionOneContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.card}>
              <div className={styles.iconsCard}>
                <Image
                  src={"/icons/ux-design.png"}
                  className={styles.iconsImage}
                  width={512}
                  height={512}
                  alt="ui-ux"
                />
              </div>
              <div className={styles.infoContainer}>
                <h4 className={styles.titleCard}>UI/UX</h4>
                <p>
                  {`Enhance your project's allure with stunning design and seamless
                  functionality, creating an unmatched user experience.`}
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconsCard}>
                <Image
                  src={"/icons/ui.png"}
                  className={styles.iconsImage}
                  width={512}
                  height={512}
                  alt="web-design"
                />
              </div>
              <div className={styles.infoContainer}>
                <h4 className={styles.titleCard}>Mobile-Development</h4>
                <p>{`Catalyzing your business project's achievements through innovative mobile development approaches.`}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconsCard}>
                <Image
                  src={"/icons/setting.png"}
                  className={styles.iconsImage}
                  width={512}
                  height={512}
                  alt="uiux"
                />
              </div>
              <div className={styles.infoContainer}>
                <h4 className={styles.titleCard}>Software development</h4>
                <p>{`Deliver your high-quality software products that fulfill your needs and solve your specific problems.`}</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.iconsCard}>
                <Image
                  src={"/icons/stocks.png"}
                  className={styles.iconsImage}
                  width={512}
                  height={512}
                  alt="uiux"
                />
              </div>
              <div className={styles.infoContainer}>
                <h4 className={styles.titleCard}>Raise your business</h4>
                <p>
                  Broaden horizons: Embrace digitalization to broaden your
                  business horizons and expand your reach.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Straightlines />
        <section className={styles.sectionTwo}>
          <h3 className={styles.titleSectionTwo}>
            {`Let's talk about your project`}
          </h3>
          <button
            className={button.talk}
            onClick={() => {
              handleContact("https://wa.me/+6281386329291");
            }}
          >
            {`Let me know`} <IoOpenOutline className={button.iconsTalk} />
          </button>
        </section>
        <Straightlines />
        <section className={styles.projectSCT}>
          <h3>{`"Explore a Multitude of Exciting Projects"`}</h3>
          <button
            className={button.project}
            onClick={() => {
              navigateTo("project");
            }}
          >
            Explore
          </button>
        </section>
        <Straightlines />
        <Footer />
      </main>
    </>
  );
};

export default pageLoader(Home);
