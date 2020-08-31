import Head from 'next/head'
import { Global, css } from '@emotion/core'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'

interface Props {
  Component: React.FC
  pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: Props): React.ReactElement {
  return (
    <ThemeProvider>
      <Head>
        <title>guilherme de andrade | software engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }

          body {
            background-color: ${theme.colors.gray[50]};
          }

          #__next {
            min-height: 100vh;
            color: ${theme.colors.gray[700]};
          }
        `}
      />
    </ThemeProvider>
  )
}

export default MyApp
