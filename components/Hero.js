import React from "react";
import Link from "next/link";
import styles from "../styles/hero.module.css";

const Hero = ({ riverMap }) => {
  const {
    watersystem,
    basinthumb,
    title,
    catch1,
    catch2,
    basinarea,
    basinlength,
    basingoverment,
    basingovermentname,
    relatedwatersystem,
    relatedwatersystemN,
  } = riverMap;
  return (
    <section className="parts-grid section-center">
      <h4
        className={
          watersystem === "1級河川"
            ? `${styles.watersystem} ${styles.pink}`
            : `${styles.watersystem} ${styles.blue}`
        }
      >
        {watersystem}
      </h4>
      <h1 className={styles.title}>{title}</h1>
      <img src={basinthumb.url} alt={title} className={styles.mapicon} />
      <dl className={styles.basindata}>
        <dt>流域面積</dt>
        <dd>{basinarea}k㎡</dd>
        <dt>流路延長</dt>
        <dd>{basinlength}km</dd>
        <dt>流域関連市町</dt>
        <dd>{basingoverment}市</dd>
        <dd
          dangerouslySetInnerHTML={{ __html: basingovermentname }}
          className={styles.name}
        />
        <dt>隣接水系</dt>
        <dd>{relatedwatersystem}</dd>
        <dd className={styles.name}>
          {relatedwatersystemN.map((item, index) => {
            const { name, path } = item;
            if (path) {
              return (
                <React.Fragment key={index}>
                  <Link href={`/river-maps/${path}`}>
                    <a>{name}</a>
                  </Link>
                </React.Fragment>
              );
            }
          })}
        </dd>
      </dl>
      <h2 className={styles.catch}> {catch1} </h2>
      <h2 className={styles.catch}> {catch2} </h2>
    </section>
  );
};

export default Hero;
