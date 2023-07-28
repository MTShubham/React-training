import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchPersons = () => {
    return axios.get("http://localhost:4000/peoples");
}
const fetchAnimals = () => {
    return axios.get("http://localhost:4000/animals");
}

const ParallelQueries = () => {
    const { data: persons } = useQuery('fetch-persons', fetchPersons);
    const { data: animals } = useQuery('fetch-animals', fetchAnimals);
    return (
        <div>
            {persons?.data.map(person => <p key={person.id}>{person.name}</p>)}
            {animals?.data.map(animal => <p key={animal.id}>{animal.name}</p>)}
        </div>
    )
}

export default ParallelQueries
