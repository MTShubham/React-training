import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* {process.env.HOST}  we can't render without NEXT_PUBLIC_ in JSX*/} 
      <br />
      {process.env.NEXT_PUBLIC_HOST}
      {/* <div className='content'>Index</div> */}
      {/* fill={true} object-fit, priority, onLoadingComplete */}
      {/* <Image src="/1.webp" alt="Random images" width="700" height="500" loading="lazy" onLoad={event => console.log("loaded")} onLoadingComplete={event => console.log("loading")} />
      <div>
        {
          ['1', '2', '3', '4', '5'].map(path => {
            return (
              <Image src={`/${path}.jfif`} alt="Random images" key={path} width="700" height="500" />
            )
          })
        }
      </div> */}
    </>
  )
}
