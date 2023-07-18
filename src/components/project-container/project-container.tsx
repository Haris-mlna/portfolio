"use client";

import styles from "./project-container.module.css";
import Image from "next/image";

const ProjectContainer = () => {
  const weby = "/image/weby.png";
  const btu = "/image/bisnistekno.co.id.jpg";
  const asahSkill = "/image/asah-skill.jpg";
  const luxe = "/image/Luxe.png";
  const skylineHome = "/image/Skylines-Home.png";
  const ujiSkill = "/image/uji-skill.png";

  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      <div className={styles.projectContainer}>
        <nav className={styles.nav}>
          <span>
            Desktop : Hover to see website images & Click to go to the link
          </span>
          <span>Mobile : Click to go to the link</span>
        </nav>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Image src={weby} alt="weby" width={1920} height={1080} />
            <h1>Weby</h1>
          </div>
          <div
            className={styles.card}
            onClick={() => {
              navigateTo("https://bisnistekno.co.id/");
            }}
          >
            <Image src={btu} alt="btu" width={1920} height={1080} />
            <h1>BTU</h1>
          </div>
          <div
            className={styles.card}
            onClick={() => {
              navigateTo("https://asah-skill.com/");
            }}
          >
            <Image
              src={asahSkill}
              alt="asah-skill"
              width={1920}
              height={1080}
            />
            <h1>Asah-skill</h1>
          </div>
          <div
            className={styles.card}
            onClick={() => {
              navigateTo("https://uji-skill.com/#/landing");
            }}
          >
            <Image src={ujiSkill} alt="uji-skill" width={1920} height={1080} />
            <h1>Uji-skill</h1>
          </div>
          <div className={styles.card}>
            <Image src={luxe} alt="Luxe" width={1920} height={1080} />
            <h1>Luxe</h1>
          </div>
          <div className={styles.card}>
            <Image src={skylineHome} alt="Skyline" width={1920} height={1080} />
            <h1>Skyline</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
