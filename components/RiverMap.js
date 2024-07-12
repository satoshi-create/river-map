import React from "react";
import styled from "styled-components";
import Image from "next/image";
import styles from "../styles/rivermap.module.css";
import Generator from "./Generator";
import Link from "next/link";

const RiverMap = ({ values }) => {
  const {
    rivermap,
    toggleGov,
    opcGov,
    openModal,
    rivermapImages,
    govermentImages,
  } = values;
  const { viewboxWidth, viewboxHeight, relatedBasinImages } = rivermap;
  console.log(values);
  return (
    <section className="river-map parts-grid">
      <div className={styles.rivermapbox}>
        <p className={styles.desc}>
          ※ 市町村をclickするとハザードマップが表示されます
        </p>
        <figure className={styles.rivermapfigure}>
          {rivermapImages.map((item, index) => {
            const {
              image,
              name,
              nameen,
              bln,
              opc,
              path,
              svgImage,
              basinImage,
            } = item;
            console.log(basinImage.length !== 0);
            const { url, width, height } = item.image;
            if (basinImage.length !== 0) {
              console.log(basinImage);
              return (
                bln && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
                    className={styles.basinImages}
                  >
                    {basinImage.map((item, index) => {
                      const { path, image, nameen } = item;
                      return (
                        <Link href={path} key={index}>
                          <a>
                            <BasinG
                              className={`${styles.basinImage} ${
                                styles[`${nameen}`]
                              }`}
                              opc={opc}
                              dangerouslySetInnerHTML={{ __html: image }}
                            />
                          </a>
                        </Link>
                      );
                    })}
                  </svg>
                )
              );
            } else {
              return (
                bln && (
                  <Img
                    src={url}
                    width={width}
                    height={height}
                    layout="responsive"
                    sizes="(max-width:768px) 7680px,100vw)"
                    key={index}
                    alt={name}
                    opc={opc}
                    priority
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmF/vAwADMQFs4YXxygAAAABJRU5ErkJggg=="
                  />
                )
              );
            }
          })}
          {toggleGov && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
              style={{ opacity: ` ${opcGov}` }}
              className={styles.govermentimages}
            >
              {govermentImages.map((item, index) => {
                const { nameen, opc, bln, govermentSVG } = item;
                return (
                  bln && (
                    <GovermentG
                      className={`${styles.govermentimage} ${
                        styles[`${nameen}`]
                      }`}
                      opc={opc}
                      onClick={() => openModal(index)}
                      dangerouslySetInnerHTML={{ __html: govermentSVG }}
                      key={index}
                    />
                  )
                );
              })}
            </svg>
          )}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
            className={styles.relatedBasinImages}
          >
            {relatedBasinImages.map((item, index) => {
              const { image, path } = item;
              if (path) {
                return (
                  <React.Fragment key={index}>
                    <Link href={`/river-maps/${path}`}>
                      <g
                        dangerouslySetInnerHTML={{ __html: image }}
                        className={styles.relatedBasinImage}
                      />
                    </Link>
                  </React.Fragment>
                );
              }
            })}
          </svg> */}
        </figure>
        <Generator values={values} />
      </div>
    </section>
  );
};

const BasinG = styled.g`
  opacity: ${(props) => props.opc};
`;
const GovermentG = styled.g`
  opacity: ${(props) => props.opc};
`;
const Img = styled(Image)`
  opacity: ${(props) => props.opc};
`;

export default RiverMap;
