import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme";
const imageScreenshot = `/images/PortfolioScreenshot.png`;

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head prefix="">
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Portfolio Main Page" />
          <meta
            property="og:image"
            content="https://portfolio-red-eta.vercel.app/images/PortfolioScreenshot.png"
          />
          <meta property="og:description" content="Portfolio land page" />
          <meta
            property="og:url"
            content="https://portfolio-red-eta.vercel.app"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
        <footer></footer>
      </Html>
    );
  }
}
