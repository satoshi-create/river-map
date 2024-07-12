import { client } from "../libs/client";
import RiverMaps from "../components/RiverMaps";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Meta";

const Home = ({ rivermaps }) => {
  // const filterdRivermaps = rivermaps.filter(
  //   (item) => item.watersystem === "1級河川"
  // );
  return (
    <>
      <Head />
      <Header
        value={{
          sectionGrid: "section-grid",
          title: "流域図から眺めるハザードマップ",
        }}
      />
      <RiverMaps rivermaps={rivermaps} />
      <Footer />
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

export default Home;
