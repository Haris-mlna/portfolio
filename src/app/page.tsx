"use client";

import styles from "../styles/home.module.css";
import button from "../styles/button.module.css";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar/navbar";

import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import {IoOpenOutline} from 'react-icons/io5'

// loading page
import pageLoader from "@/components/Loading/pageLoader";

const Home = () => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <div className={button.containerContact}>
        <button className={`${button.contact} ${button.instagram}`}>
          <AiFillInstagram/>
        </button>
        <button className={`${button.contact} ${button.twitter}`}>
          <AiOutlineTwitter/>
        </button>
        <button className={`${button.contact} ${button.linkedin}`}>
          <AiFillLinkedin/>
        </button>
        <button className={`${button.contact} ${button.github}`}>
          <AiFillGithub/>
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
      </header>
      <div className={styles.skillsContainer}></div>
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
          
        <section className={styles.sectionTwo}>
        <h3 className={styles.titleSectionTwo}>
            {`Let's talk about your project`}
          </h3>
          <button className={button.talk}>
           {`Let me know`} <IoOpenOutline className={button.iconsTalk}/>
          </button>
        </section>
      </main>
    </>
  );
};

export default pageLoader(Home);
