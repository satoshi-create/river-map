import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Meta";
import Breadcrumbs from "nextjs-breadcrumbs";
import BreadcrumbStyle from "../components/Breadcrumbs";

const about = () => {
  return (
    <>
      <Head pagetitle={"アバウト"} pageDesc={"アバウトページです"}/>
      <Header
        value={{
          sectionGrid: "section-grid",
          title: "流域図から眺めるハザードマップ",
        }}
      />
      <BreadcrumbStyle>
      <Breadcrumbs
          useDefaultStyle
          rootLabel="Home"
          activeItemClassName="brActive"
        />
      </BreadcrumbStyle>
      <Footer />
    </>
  );
};

export default about;
