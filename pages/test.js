import React from "react";
import "lazysizes";
import styles from "../styles/test.module.css";

const test = () => {
  return (
    <div className={styles.conteiner}>
      <picture>
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          media="(max-height: 375px)"
          type="image/webp"
        />
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          media="(max-height: 800px)"
          type="image/webp"
        />
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          type="image/webp"
        />
        <img
          decoding="async"
          src="/cyoujyuu_yamazaki_kou_01-1080.webp"
          class="loading lazyload"
          data-expand="600"
        />
      </picture>
      <picture>
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          media="(max-height: 375px)"
          type="image/webp"
        />
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          media="(max-height: 800px)"
          type="image/webp"
        />
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          type="image/webp"
        />
        <img
          decoding="async"
          src="/cyoujyuu_yamazaki_kou_01-1080.webp"
          class="loading lazyload"
          data-expand="600"
        />
      </picture>
      <picture>
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          media="(max-height: 375px)"
          type="image/webp"
        />
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          media="(max-height: 800px)"
          type="image/webp"
        />
        <source
          data-srcset="/cyoujyuu_yamazaki_kou_01-1080.webp"
          type="image/webp"
        />
        <img
          decoding="async"
          src="/cyoujyuu_yamazaki_kou_01-1080.webp"
          class="loading lazyload"
          data-expand="600"
        />
      </picture>
    </div>
  );
};

export default test;
