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
        <title>guilherme.codes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
      <CSSReset />
      <Global
        styles={css`
          body {
            background-color: ${theme.colors.pink[500]};
          }
          #__next {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            max-width: 600px;
            margin: 0 auto;
            color: ${theme.colors.gray[100]};
          }
        `}
      />
    </ThemeProvider>
  )
}

export default MyApp
