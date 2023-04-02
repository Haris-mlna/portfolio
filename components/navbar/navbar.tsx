import styles from "./navbar.module.css";
import Link from "next/link";
import Menu from "@/public/assets/icons/menu.png";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`${styles.nav} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.lt_side}>
        <Link href={"/"} className={styles.logo}>
          PORTFOLIO
        </Link>
      </div>
      <div className={styles.rt_side}>
        <Image src={Menu} width={512} height={512} alt="menu" className={styles.menu} />
      </div>
    </nav>
  );
}
