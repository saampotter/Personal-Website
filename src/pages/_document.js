import Document, { Html, Head, Main, NextScript } from 'next/document';
const isDev = process.env.NODE_ENV === 'development';

export default class NextSite extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <meta name="language" content="en" />
          <meta name="author" content="Sam Potter" />
          <meta name="robots" content="follow, all" />
        </Head>
        <body className="bg-white">
          <Main />
          <NextScript />
          {!isDev && <script async data-api="/_hive" src="/bee.js"></script>}
        </body>
      </Html>
    );
  }
}
