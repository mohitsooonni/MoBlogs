import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <img
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>
            MoBlogs
          </h1>
        </div>
        <p className={styles.decs}>
          {" "}
          letters, as opposed to using 'Content
          here, content here', making it look like
          readable English. Many desktop
          publishing packages and web page editors
        </p>
        <div>
          <Image
            src="/facebook.png"
            alt=""
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt=""
            width={18}
            height={18}
          />
          <Image
            src="/tiktok.png"
            alt=""
            width={18}
            height={18}
          />
          <Image
            src="/facebook.png"
            alt=""
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>
            Links
          </span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>
            Tags
          </span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>
            Socials
          </span>
          <Link href="/">Facebook</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
