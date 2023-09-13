import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            11.02.2023
          </span>
          <span className={styles.category}>
            CULTURE
          </span>
        </div>
        <Link href="/">
          <h1>
            re many variations of passages of
            Lorem Ipsum availabl
          </h1>
        </Link>
        <p className={styles.desc}>
          professor at Hampden-Sydney College in
          Virginia, looked up one of the more
          obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through
          the cites of the word in classical
          literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of
          Good and Evil) by Cicero, written in 45
          BC. This book is a treatise on the
          theory of ethics, very popular during
          the Renaissance. The first line of Lorem
          Ipsum, "Lorem ipsum dolor sit amet..",
          comes from a line in section 1.10.32.
        </p>
        <Link href="/" className={styles.desc}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
