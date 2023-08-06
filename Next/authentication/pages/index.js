import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status, update } = useSession();
  console.log({ session, status, update });   // status = authenticated/unauthenticated/loading, data = undefined/null/session

  const login = (e) => {
    e.preventDefault();
    // if (status !== 'authenticated')
      signIn()
  }
  const logout = (e) => {
    e.preventDefault();
    // if (status === 'authenticated')
    signOut();
  }
  const handleClick = async () => {
    // await update({...session, 
    //   user: {
    //   ...session?.user,
    //   accessToken: "dddd"
    // }})
  }

  return (
    <>
      {session?.user ? <p>SignedIn as {session.user.name}</p> : <p>Not SignedIn</p>}
      <button onClick={handleClick}>Update Access Token</button><br /><br />

      {/* <button onClick={login}><Link href='/api/auth/signin' >Sign In</Link></button> */}
      <button ><Link href='/login' >Sign In</Link></button>
      <button onClick={logout}><Link href='/api/auth/signout' >Sign Out</Link></button>
      <button><Link href='/dashboard'>Dashboard</Link></button>
      <button><Link href='/admindashboard'>Admin Dashboard</Link></button>
    </>
  )
}
