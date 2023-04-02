import { useEffect, Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import Footer from "@/components/footer/footer";

import styles from "../styles/Home.module.css";

interface PortfolioPageProps {
  params: any | null;
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Haris Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Haris Maulana's Portfolio" />
        <meta name="keywords" content="Haris Portfolio" />
        <meta name="author" content="Haris Maulana" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.container}>
        <Navbar />

        <header className={styles.hero}>
          <h1
            className={styles.heroTitle}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Hello!, my name is{" "}
            <span className={styles.heroTitleAccent}>Haris Maulana</span>
          </h1>
          <h1
            className={styles.heroTitle}
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="2000"
          >
            I am a software engineer
          </h1>
        </header>

        <div className={styles.sectionContainer}>
          <Sidebar />
          <div className={styles.main}>
            <Suspense fallback={<h1>Loading...</h1>}>
              <section className={styles.containerAboutMe}>
                <div className={styles.containerImage}>
                  <div className={styles.imageFrame}>
                    <Image
                      alt="avatar"
                      src={"/assets/images/man.png"}
                      width={512}
                      height={512}
                      className={styles.aboutMeAvatar}
                    />
                  </div>
                </div>
                <article className={styles.aboutMe}>
                  <h2 className={styles.aboutMeTitle}>About Me</h2>
                  <hr />
                  <div className={styles.aboutMepara}>
                    <p>
                      Hello! My name is Haris Maulana, and I am a male software
                      engineer from Jakarta, Indonesia. I was born on February
                      21, 2000, which means I am currently 23 years old.
                      <br />
                      <br />
                      I graduated from SMAN 25 Bandung, a well-known high school
                      in the city of Bandung, Indonesia. During my time there, I
                      was always fascinated by computers and programming, which
                      led me to pursue a career in the tech industry.
                      <br />
                      <br />
                      In 2021, I started my career as a Frontend Developer at
                      Bisnis Tekno Utama, a tech company based in Jakarta.
                      During my time there, I had the opportunity to work on
                      various projects, where I gained valuable experience using
                      different programming languages and frameworks.
                    </p>
                    <br />
                    <br />
                    Some of the technologies that I am proficient in include:
                    <ul className={styles.aboutMeList}>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>Javascript</li>
                      <li>Angular</li>
                      <li>React.js</li>
                      <li>Next.js</li>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>Tailwind</li>
                      <li>Bootstrap</li>
                      <li>Git</li>
                      <li>API</li>
                      <li>VPS Hosting manager (Cpanel, Bitvise, etc.)</li>
                      <li>Design material (MUI, AntDesign, etc.)</li>
                      <li>Figma</li>
                    </ul>
                    <p>
                      My passion for programming is not limited to just work. I
                      am always eager to learn new things and take up new
                      challenges. I am constantly working on personal projects
                      to improve my skills and explore new technologies.
                      <br />
                      <br />
                      Apart from programming, I enjoy spending my free time with
                      my family and friends. I am also an avid reader and enjoy
                      reading books on different subjects, including technology,
                      philosophy, and history.
                    </p>
                  </div>
                </article>
              </section>
            </Suspense>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
