import React, { useReducer } from "react";
import styles from "../styles/modal.module.css";
import { X } from "react-feather";
import Image from "next/image";
import reducer from "../pages/river-maps/reducer";
import styled from "styled-components";
import { modalicon } from "../libs/generatoricon.js";

const Modal = ({ values }) => {
  const { govermentImages, value, closeModal } = values;
  console.log(values);
  const { name, hazardImage } = govermentImages[value];

  const initialState = {
    hazardImages: hazardImage,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleHazardImage = (name) => {
    console.log(name);
    dispatch({ type: "TOGGLE-HAZARD-IMAGE", payload: { name } });
  };
  const opacityHazardImage = (name, e) => {
    dispatch({ type: "OPACITY-HAZARD-IMAGE", payload: { name, e } });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.container}>
        <h3 className={styles.title}>{name}</h3>
        <button className={styles.closebtn} onClick={closeModal}>
          <X />
        </button>
        <figure className={styles.figure}>
          {state.hazardImages.map((item, index) => {
            const { name, bln, opc } = item;
            const { url, width, height } = item.image;
            return (
              bln && (
                <Img
                  src={url}
                  width={width}
                  height={height}
                  layout="responsive"
                  sizes="(max-width:768px) 7680px,100vw)"
                  alt={name}
                  quality={100}
                  key={index}
                  priority
                  opc={opc}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                />
              )
            );
          })}
        </figure>
        <div className={styles.generator}>
          {state.hazardImages.map((item, index) => {
            const { name, opc, bln } = item;
            return (
              <div className={styles.generatorbox} key={index}>
                <figure
                  className={
                    bln
                      ? `${styles.generatorfigure} ${styles.blue}`
                      : `${styles.generatorfigure} ${styles.grey}`
                  }
                >
                  <img
                    src={modalicon[index]}
                    alt={name}
                    className={styles.generatoricon}
                    name={name}
                    onClick={(e) => toggleHazardImage(e.target.name)}
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
                  onChange={(e) => opacityHazardImage(e.target.name, e)}
                />
                <p className={styles.generatortext}>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Img = styled(Image)`
  opacity: ${(props) => props.opc};
`;

export default Modal;
