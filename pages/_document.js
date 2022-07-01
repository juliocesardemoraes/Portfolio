import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../lib/theme";
const imageScreenshot = `/images/PortfolioScreenshot.png`;

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Portfolio land page" />

          <meta itemProp="name" content="Portfolio Main Page" />
          <meta itemProp="description" content="Portfolio land page" />
          <meta
            itemProp="image"
            content="http://portfolio-red-eta.vercel.app/images/PortfolioScreenshot.png"
          />

          <meta
            property="og:url"
            content="https://portfolio-red-eta.vercel.app"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio Main Page" />
          <meta property="og:description" content="Portfolio land page" />
          <meta
            property="og:image"
            content="http://portfolio-red-eta.vercel.app/images/PortfolioScreenshot.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio Main Page" />
          <meta name="twitter:description" content="Portfolio land page" />
          <meta
            name="twitter:image"
            content="http://portfolio-red-eta.vercel.app/images/PortfolioScreenshot.png"
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
