import Document, { Html, Head, Main, NextScript } from "next/document";
import siteMeta from "../libs/constants";
const {siteLang} = siteMeta

class MyDocument extends Document {
  render() {
    return (
      <Html lang={siteLang}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
