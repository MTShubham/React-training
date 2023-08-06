import { useRouter } from "next/router"

const About = () => {
  const router = useRouter();
  return (
    <>
      <p>About Page</p>
      <button onClick={() => router.push("/")}>Go to Index</button>
    </>
  )
}

export default About
