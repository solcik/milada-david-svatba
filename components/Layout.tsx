import React from 'react';
import Head from 'next/head';
import cls from 'classnames';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <Head>
        <title>Milada & David</title>
        <meta name="description" content="" />
        <meta property="og:title" content="Svatba Milada & David" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://milada-david-svatba.now.sh/" />
        <meta property="og:image" content="https://milada-david-svatba.now.sh/images/2000/2020-02-22.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Parisienne&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={cls(styles.container, 'mx-auto', 'my-4', 'md:max-w-6xl')}>{children}</main>
    </>
  );
}
