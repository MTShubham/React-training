import { useRouter } from "next/router"

// [[]] in the file name indicates that /docs will also be considered. [] only considers docs/x, not /docs

export default function Docs() {
    const router = useRouter();
    const { params } = router.query;
    console.log(params);    
    // If the url is "/docs/x/y" so x and y will be the params in the array. It is used in the case where we want to pass multiple parameters. 
    // For example, if we are searching for the mobile with multiple preferences then we can pass it like this.
    return (
        <>  
            <p>Catch All Routes Demo</p>
        </>
    )
}