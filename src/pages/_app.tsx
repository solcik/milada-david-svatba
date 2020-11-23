import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../css/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Milada & David</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Svatba Milada & David" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milada-david-svatba.now.sh/" />
        <meta
          property="og:image"
          content="https://milada-david-svatba.now.sh/images/2000/2020-02-22.jpg"
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Parisienne&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
