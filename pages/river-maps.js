import React from "react";
import RiverMaps from "../components/RiverMaps";
import { client } from "../libs/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Meta";

const riverMaps = ({ rivermaps }) => {
  return (
    <>
       <Head pagetitle={"流域図"} pageDesc={"流域図一覧です"}/>
      <Header
        value={{
          sectionGrid: "section-grid",
          title: "流域図から眺めるハザードマップ",
        }}
      />
      <RiverMaps rivermaps={rivermaps} />
      <Footer/>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "river-map" });

  return {
    props: {
      rivermaps: data.contents,
    },
  };
};

export default riverMaps;
