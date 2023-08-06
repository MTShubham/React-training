import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import '@/styles/globals.css'
import '../styles/layout.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name='description' content='New Next App' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
