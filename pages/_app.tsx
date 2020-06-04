import React from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
