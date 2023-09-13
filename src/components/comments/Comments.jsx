import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
          />
          <button className={styles.button}>
            Post
          </button>
        </div>
      ) : (
        <Link href="/login">
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>
                Mo Soni
              </span>
              <span className={styles.dates}>
                10.10.223
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            description description descriptionv
            vdescriptionde scrip tiondescr iption
            descriptiondescr iptiond es cription
            desc ription desc ripti ondescr ipt
            iondescr iption de s cript
            iondescription
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>
                Mo Soni
              </span>
              <span className={styles.dates}>
                10.10.223
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            description description descriptionv
            vdescriptionde scrip tiondescr iption
            descriptiondescr iptiond es cription
            desc ription desc ripti ondescr ipt
            iondescr iption de s cript
            iondescription
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>
                Mo Soni
              </span>
              <span className={styles.dates}>
                10.10.223
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            description description descriptionv
            vdescriptionde scrip tiondescr iption
            descriptiondescr iptiond es cription
            desc ription desc ripti ondescr ipt
            iondescr iption de s cript
            iondescription
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>
                Mo Soni
              </span>
              <span className={styles.dates}>
                10.10.223
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            description description descriptionv
            vdescriptionde scrip tiondescr iption
            descriptiondescr iptiond es cription
            desc ription desc ripti ondescr ipt
            iondescr iption de s cript
            iondescription
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>
                Mo Soni
              </span>
              <span className={styles.dates}>
                10.10.223
              </span>
            </div>
          </div>
          <p className={styles.desc}>
            description description descriptionv
            vdescriptionde scrip tiondescr iption
            descriptiondescr iptiond es cription
            desc ription desc ripti ondescr ipt
            iondescr iption de s cript
            iondescription
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
