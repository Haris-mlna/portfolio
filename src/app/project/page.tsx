"use client";

import { FC } from "react";
import Image from "next/image";

// Styling
import styles from "./page.module.css";
import button from "./button.module.css";

// React-Icons
import { FaArrowLeftLong } from "react-icons/fa6";

// Components
import pageLoader from "@/components/Loading/pageLoader";
import Footer from "@/components/Footer/footer";
import Straightlines from "@/components/Navbar/line";
import ProjectContainer from "@/components/project-container/project-container";

const Project: FC = () => {
  const navigateTo = (link: string) => {
    window.location.href = link;
  };

  const logoWeby = "/image/LOGO-weby.png";
  const logoPorto = "/image/LOGO-Porto.png";
  const logoBTU = "/image/LOGO-BTU.png";

  return (
    <>
      <main className={styles.projectpages}>
        <button
          className={button.back}
          onClick={() => {
            navigateTo("/");
          }}
        >
          <FaArrowLeftLong />
        </button>
        <div className={styles.projectIndicator}>
          <span className={styles.indicatorIcons}>{`</>`}</span>
        </div>
        <section className={styles.project}>
          <ProjectContainer />
        </section>
        <Straightlines />
        <Footer />
      </main>
    </>
  );
};

export default pageLoader(Project);
