import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import styles from "./singlePage.module.css";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            OKOK ODJB DHBD DHCB DDB HDBHBC CBD
            HCNJSN CNEBD IJDE EDRFJU
          </h1>
          <div className={styles.user}>
            <div
              className={
                styles.userImageContainer
              }
            >
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div
              className={styles.userTextContainer}
            >
              <span className={styles.username}>
                Mo Soni
              </span>
              <span className={styles.date}>
                10.10.2023
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam
              malesuada mi quis ante eleifend
              facilisis. Donec iaculis vestibulum
              commodo, libero neque iaculis orci,
              quis tincidunt dolor leo molestie
              massa. Morbi volutpat sem eu mattis
              varius. Duis finibus ultrices ipsum,
              ut fermentum turpis placerat nec.
              Sed ultrices mauris diam, ut
            </p>
            <h2>Sub heading</h2>
            <p>
              eros dignissim tristique. Morbi
              hendrerit tincidunt diam, ut porta
              mi euismod sit amet. Nunc vitae
              lacus nec purus gravida ornare eu
              vel magna. Aliquam erat volutpat.
              Sed feugiat, ipsum in viverra
              Pellentesque habitant morbi
              tristique senectus et netus et
              malesuada fames ac turpis egestas.
              Aenean viverra massa vel ligula
            </p>
            <p>
              pulvinar nulla tincidunt ac.
              Curabitur dignissim egestas mi, a
              convallis diam tempus vitae.
              Phasellus ac viverra lorem. Praesent
              a elementum mauris, in semper risus.
              semper, a convallis nisl commodo.
              Curabitur vestibulum ipsum ex, non
              convallis est ultricies nec. Nullam
              tincidunt mi ac eros semper, vitae
              dictum nulla tempor. Vestibulum
              bibendum eros nunc, dignissim
              pharetra massa cursus vel.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
