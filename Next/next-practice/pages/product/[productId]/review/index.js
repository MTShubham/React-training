import { usePathname } from 'next/navigation'

const Reviews = () => {
  const pathname = usePathname();
  console.log("current path" , pathname);   // For getting the url

    return (
        <>
            <p>Reviews page</p>

            {/* This will give an error as Link is unable to find productId in the route. */}
            {/* <Link href="./review">Product page</Link>  */}
        </>
    )
}

export default Reviews
