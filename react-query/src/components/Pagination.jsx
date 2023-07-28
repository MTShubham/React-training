import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';

const fetchPaginatedPersons = (pageNumber) => {
    return axios.get(`http://localhost:4000/peoples?_limit=2&_page=${pageNumber}`)
}

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data } = useQuery(['persons', pageNumber], () => fetchPaginatedPersons(pageNumber), { keepPreviousData: true })

    return (
        <div>
            <div>
                {data?.data.map(person => <p key={person.id}>{person.name}</p>)}
            </div>
            <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>Prev</button>
            <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === 3}>Next</button>
        </div>
    )
}

export default Pagination
