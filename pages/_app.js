import React, { useState, createContext } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";

export const AppContext = createContext();

function MyApp({ Component, pageProps, router }) {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [value, setvalue] = useState(0);

  const openModal = (i) => {
    setModalIsOpen(true);
    setvalue(i);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openSideber = () => {
    setisSidebarOpen(true);
  };

  const closeSidebar = () => {
    setisSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        value,
        isModalOpen,
        openModal,
        closeModal,
        isSidebarOpen,
        openSideber,
        closeSidebar,
      }}
    >
      {/* <Layout> */}
      <>
        <Component {...pageProps} key={router.asPath} />
      </>
      {/* </Layout> */}
    </AppContext.Provider>
  );
}

export default MyApp;
