import Footer from "@/components/layout/Footer"
import Head from "next/head"

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name='description' content='About Page' />
            </Head>
            <div className='content'>About</div>
        </>
    )
}

export default About

// We are specifying here that all the pages are with header and footer. But in about, only footer included
About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}
