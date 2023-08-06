import '@/styles/globals.css'
import { SessionProvider, useSession } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  const { status } = useSession({ required: true });
  if (status === 'loading') {
    return <h1>Loading...</h1>
  }
  return children
}
