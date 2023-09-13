import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Mo this side! </b>
        Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="img"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem Ipsum is simply dummy text of
            the printing and typesettin
          </h1>
          <p className={styles.postDesc}>
            There are many variations of passages
            of Lorem Ipsum available, but the
            majority have suffered alteration in
            some form, by injected humour, or
            randomised words which don't look eve
            200 Latin words, combined with a
            handful of model sentence structures,
            to generate Lorem Ipsum which looks
            reasonable. The generated Lorem Ipsum
            is therefore always free from
            repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <button className={styles.button}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
