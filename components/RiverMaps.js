import Link from "next/link";
import React from "react";
import styles from "../styles/rivermaps.module.css";
import Image from "next/image";

const riverMaps = ({ rivermaps }) => {
  return (
    <>
      <section className="section-grid">
        <ul className={styles.lists}>
          {rivermaps.map((rivermap, index) => {
            const { id, title, watersystem, city, catch1, catch2, thumbImage } =
              rivermap;
            const { url, width, height } = thumbImage;
            return (
              <li key={index} className={styles.card}>
                <figure className={styles.figure}>
                  <Link href={`/river-maps/${id}`}>
                    <a>
                      <Image
                        src={url}
                        width={width}
                        height={height}
                        layout="responsive"
                        className={styles.image}
                        sizes="(max-width:768px) 768px,100vw)"
                        key={index}
                        alt={title}
                        priority
                        quality={50}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                      />
                    </a>
                  </Link>
                  <h4
                    className={
                      watersystem === "1級河川"
                        ? `${styles.watersystem} ${styles.pink}`
                        : `${styles.watersystem} ${styles.blue}`
                    }
                  >
                    {watersystem}
                  </h4>
                </figure>
                <div className={styles.info}>
                  <div className={styles.infoheader}>
                    <h3 className={styles.title}>{title}</h3>
                    <h4
                      dangerouslySetInnerHTML={{ __html: city }}
                      className={styles.city}
                    />
                  </div>
                  <div className={styles.catch}>
                    <p className={styles.catch1}>{catch1}</p>
                    <p className={styles.catch2}>{catch2}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default riverMaps;
