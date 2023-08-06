import User from '@/components/user'
import React from 'react'
import Link from 'next/link'
import isrFlow from '../../public/ISR-flow.png'
import Image from 'next/image'

const Users = ({ users }) => {
    return (
        <>
            <p>Users</p>
            {users.map(user => {
                return (
                    <div key={user.id} style={{ marginTop: "30px" }}>
                        <User user={user} />
                        <button><Link href={`/users/${user.id}`}>View User {user.id}</Link></button>
                    </div>
                )
            })}
            {/* <div style={{margin: "100px 0 0 30px"}}>
                <p><strong>Incremental Static Regeneration (ISR) flow</strong></p>
                <Image src={isrFlow} alt="" height="300" width="600" />
            </div> */}
        </>
    )
}

export default Users

// export async function getStaticProps() {
//     console.log("Generating / Regenerating Users")
//     // const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const response = await fetch("http://localhost:4000/users");
//     const data = await response.json();

//     return {
//         props: {
//             users: data
//         },
//         revalidate: 5  // Time after what it will regenerate the file. It is ISR
//     }
// }

export async function getServerSideProps() {
    console.log("Calling ServerSideProps")
    const response = await fetch("http://localhost:4000/users");
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}