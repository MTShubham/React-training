import { useRouter } from "next/router";

const UserDetail = ({ user }) => {
    const router = useRouter();

    // { console.log(router.isFallback) }
    // Only applicable in fallback:true
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <p>UserId : <b>{user.id}</b></p>
            <p>Name : <b>{user.name}</b></p>
            <p>Email : <b>{user.email}</b></p>
        </>
    )
}

export default UserDetail


// SSG

// If we directly changes the url and visit /users/1, it will take it from 1.html in .next folder after build.
// But if we visit it by clicking on Link, then it will take it from 1.json 
// export async function getStaticPaths() {
//     // const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const response = await fetch("http://localhost:4000/users");
//     const data = await response.json();

//     // const paths = data.map(user => {
//     //     return {
//     //         params: {
//     //             userId: `${user.id}`
//     //         }
//     //     }
//     // })

//     return {
//         // paths: paths,
//         paths: [
//             {
//                 params: { userId: '1' }
//             },
//             // {
//             //     params: { userId: '2' }
//             // }
//         ],
//         // fallback:false means other routes should 404. But in true or blocking it prerenders the specified routes and other dynamic routes will be requested at runtime. 
//         // In true, loading page is shown first and try to fetch data in background and when it becomes ready it shows. But in blocking old data no loading page can be shown, first data is loaded and then it renders.
//         // Link : https://stackoverflow.com/questions/67787456/what-is-the-difference-between-fallback-false-vs-true-vs-blocking-of-getstaticpa
//         fallback: true
//     }
// }

// export async function getStaticProps(context) {
//     const { params } = context;
//     console.log(`Regenerating user ${params.userId}`)
//     // const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
//     const response = await fetch(`http://localhost:4000/users/${params.userId}`);
//     const data = await response.json();

//     if (!data.id) {
//         console.log("not found");
//         return {
//             props: {
//                 notFound: true
//             }
//         }
//     }

//     return {
//         props: {
//             user: data
//         },
//         revalidate: 5
//     }
// }

// SSR
export async function getServerSideProps(context) {
    const { params, req, res, query } = context;

    // console.log("response", res);
    // console.log("request", req);
    // console.log("query", query);

    const response = await fetch(`http://localhost:4000/users/${params.userId}`);
    const data = await response.json();

    return {
        props: {
            user: data
        }
    }
}