import {
  default as NextDocument,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/img/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/img/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#151718" />
          <meta
            name="msapplication-config"
            content="/img/favicons/browserconfig.xml"
          />
          <meta name="theme-color" content="#151718" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
