import React from "react";
import styles from "../styles/generator.module.css";
import { generatoricon } from "../libs/generatoricon";

const Generator = ({ values }) => {
  const {
    rivermapImages,
    toggle,
    toggleGovermentImage,
    opacity,
    opacityGovermentImage,
    toggleGov,
    toggleGovermentPart,
    opacityGovermentPart,
    govermentImages,
  } = values;
  return (
    <div className={styles.generator}>
      {rivermapImages.map((item, index) => {
        const { name, opc, bln } = item;
        return (
          <div className={styles.generatorbox} key={index}>
            <figure
              className={
                bln
                  ? `${styles.figure} ${styles.colorblue}`
                  : `${styles.figure} ${styles.colorgrey}`
              }
            >
              <img
                src={generatoricon[index]}
                alt={name}
                className={styles.generatoricon}
                name={name}
                onClick={(e) => toggle(e.target.name)}
              />
            </figure>
            <input
              type="range"
              name={name}
              min="0"
              max="1"
              step="0.05"
              defaultValue={opc}
              className={styles.generatorslider}
              onChange={(e) => opacity(e.target.name, e)}
            />
            <p className={styles.generatortext}>{name}</p>
          </div>
        );
      })}

      <div className={styles.generatorbox}>
        <figure
          className={
            toggleGov
              ? `${styles.figure} ${styles.colorblue}`
              : `${styles.figure} ${styles.colorgrey}`
          }
        >
          <img
            src="/images/icon/goverment-icon.svg"
            alt="市町村"
            className={styles.generatoricon}
            onClick={() => toggleGovermentImage()}
          />
        </figure>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          defaultValue="1"
          className={styles.generatorslider}
          onChange={(e) => opacityGovermentImage(e)}
        />
        <p className={styles.generatortext}>市町村</p>
      </div>
      {/* 
      <div className={styles.generatorboxsSub}>
        {govermentImages.map((item, index) => {
          const { name, opc } = item;
          return (
            <div className={styles.generatorboxSub} key={index}>
              <img
                src="/images/generator-icon.svg"
                alt="行政区分"
                className={styles.generatoricon}
                name={name}
                onClick={(e) => toggleGovermentPart(e.target.name)}
              />
              <input
                type="range"
                name={name}
                min="0"
                max="1"
                step="0.05"
                defaultValue={opc}
                className={styles.generatorslider}
                onChange={(e) => opacityGovermentPart(e.target.name, e)}
              />
              <p className={styles.generatortext}>{name}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Generator;
