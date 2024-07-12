import { useReducer, useContext } from "react";
import { client } from "../../libs/client";
import Modal from "../../components/Modal";
import reducer from "./reducer";
import Hero from "../../components/Hero";
import RiverMap from "../../components/RiverMap";
import { AppContext } from "../_app";
import BreadcrumbStyle from "../../components/Breadcrumbs";
import Breadcrumbs from "nextjs-breadcrumbs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "../../components/Meta";

export default function riverMap({ rivermap }) {
  const { value, isModalOpen, openModal, closeModal } = useContext(AppContext);

  const initialState = {
    rivermapImages: rivermap.mainImage,
    govermentImages: rivermap.govermentImage,
    toggleGov: true,
    opcGov: 1,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = (name) => {
    dispatch({ type: "TOGGLE", payload: { name } });
  };

  const toggleGovermentImage = () => {
    dispatch({ type: "TOGGLE-GOVERMENT-IMAGE" });
  };
  const toggleGovermentPart = (name) => {
    dispatch({ type: "TOGGLE-GOVERMENT-PART", payload: { name } });
  };

  const opacity = (name, e) => {
    dispatch({ type: "OPACITY", payload: { name, e } });
  };
  const opacityGovermentImage = (e) => {
    dispatch({ type: "OPACITY-GOVERMENT-IMAGE", payload: { e } });
  };
  const opacityGovermentPart = (name, e) => {
    dispatch({ type: "OPACITY-GOVERMENT-PART", payload: { name, e } });
  };

  return (
    <>
      <Head
        pagetitle={rivermap.title}
        pageDesc={`${rivermap.title}のページです`}
      />
      <Header
        value={{
          sectionGrid: "parts-grid",
          title: "流域図から眺めるハザードマップ",
        }}
      />
      <Hero riverMap={rivermap} />
      {isModalOpen && <Modal values={{ ...state, value, closeModal }} />}
      <RiverMap
        values={{
          rivermap,
          ...state,
          toggle,
          toggleGovermentImage,
          toggleGovermentPart,
          opacity,
          opacityGovermentImage,
          opacityGovermentPart,
          openModal,
        }}
      />
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "river-map" });

  const paths = data.contents.map((content) => `/river-maps/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "river-map", contentId: id });

  return {
    props: {
      rivermap: data,
    },
  };
};
