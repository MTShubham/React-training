import React, { Fragment } from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query';

const fetchPersons = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/peoples?_limit=2&_page=${pageParam}`);
}

const InfiniteQueries = () => {
    const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['fetch-persons'], fetchPersons, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 3)
                return pages.length + 1;
            else
                return undefined;
        },
        keepPreviousData: true
    })

    if (isLoading)
        return <p>Loading...</p>
    if (isError)
        return <p>{error.message}</p>

    return (
        <div>
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
            <div>{isFetching && isFetchingNextPage ? "Fetching..." : null}</div>
            <div>
                {data?.pages.map((group, i) => {
                    return (
                        <div key={i}>
                            {group.data?.map(person => <p key={person.id}>{person.name}</p>)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InfiniteQueries
