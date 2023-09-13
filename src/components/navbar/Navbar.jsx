import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="Facebook"
          width={24}
          height={24}
        />
        <Image
          src="/github.png"
          alt="Github"
          width={24}
          height={24}
        />
        <Image
          src="/twitter.png"
          alt="Twitter"
          width={24}
          height={24}
        />
        <Image
          src="/youtube.png"
          alt="Youtube"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.logo}>MoBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          homepage
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
