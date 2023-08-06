import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/router";

export default function Login({ providers }) {
  const router = useRouter();
  const redirectTo = (providerId) => {
    if(signIn(providerId))
      router.push("/dashboard")
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => redirectTo(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/dashboard" } };
  }

  const providers = await getProviders();
  
  return {
    props: { providers: providers ?? [] },
  }
}