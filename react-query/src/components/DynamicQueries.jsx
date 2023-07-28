import React from 'react'
import axios from 'axios'
import { useQueries } from 'react-query'

const fetchPerson = (id) => {
    return axios.get(`http://localhost:4000/peoples/${id}`);
}

const DynamicQueries = ({ personIds }) => {
    const result = useQueries(
        personIds.map(id => {
            return {
                queryKey: ['person', id],
                queryFn: () => fetchPerson(id)
            }
        })
    )
    return (
        <div>
            {result?.map(res => <p key={res.data?.data.id}>{res.data?.data.name}</p>)}
        </div>
    )
}

export default DynamicQueries
