import type { AppProps } from 'next/app'
import Theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme>
         <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App
