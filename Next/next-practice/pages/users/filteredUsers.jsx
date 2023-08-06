import axios from "axios";
import User from '@/components/user'
import { useState } from "react";
import { useRouter } from "next/router";

// Pre-rendering + clientside rendering

const FilteredUsers = ({ users }) => {
    const [filteredData, setFilteredData] = useState(users);
    const router = useRouter();
    
    // If all the data has been fetched then we can use array.filter But if some part of the data is fetched initially then we have to fetch again using some condition
    const fetchFilteredData = async () => {
        const response = await axios("http://localhost:4000/users?age=21");
        setFilteredData(response.data);
        router.push("/users/filteredUsers?age=21", undefined, { shallow: true })    // shallow:true means update the path of current page without refresh or rerender
    }

    return (
        <>
            <p>Users</p>
            <button onClick={fetchFilteredData}>Load data with age 21</button>
            {filteredData.map(user => {
                return (
                    <div key={user.id} style={{ marginTop: "30px" }}>
                        <User user={user} />
                    </div>
                )
            })}
        </>
    )
}

export default FilteredUsers

export async function getServerSideProps(context) {
    const { query } = context;
    const { age } = query;
    const response = await axios(`http://localhost:4000/users?${age ? 'age=21' : ''}`);
    return {
        props: { users: response.data }
    }
}