import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={`${styles.category} ${styles.travel}`}
          >
            Travel
          </span>
          <h3 className={styles.postTitle}>
            lorre fwjhs j vcj vsgd c jsa xbdbccbdh
            ujbshb
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>
              Mo Soni{" "}
            </span>
            <span className={styles.date}>
              - 10.09.2023
            </span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={`${styles.category} ${styles.culture}`}
          >
            Travel
          </span>
          <h3 className={styles.postTitle}>
            lorre fwjhs j vcj vsgd c jsa xbdbccbdh
            ujbshb
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>
              Mo Soni{" "}
            </span>
            <span className={styles.date}>
              - 10.09.2023
            </span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={`${styles.category} ${styles.food}`}
          >
            Travel
          </span>
          <h3 className={styles.postTitle}>
            lorre fwjhs j vcj vsgd c jsa xbdbccbdh
            ujbshb
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>
              Mo Soni{" "}
            </span>
            <span className={styles.date}>
              - 10.09.2023
            </span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={`${styles.category} ${styles.fashion}`}
          >
            Travel
          </span>
          <h3 className={styles.postTitle}>
            lorre fwjhs j vcj vsgd c jsa xbdbccbdh
            ujbshb
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>
              Mo Soni{" "}
            </span>
            <span className={styles.date}>
              - 10.09.2023
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
