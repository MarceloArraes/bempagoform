import type { AppProps } from 'next/app'
import { AppThemeProvider } from '../lib/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: any): JSX.Element {
  return (
    <CacheProvider value={emotionCache}>
    <Head>
    <title>Bem Paggo</title>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppThemeProvider>
        <GlobalStyle />
        <CssBaseline />
      <Component {...pageProps} />
    </AppThemeProvider>
    </CacheProvider>
  )
  
}

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
  );
}




export default MyApp
