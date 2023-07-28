import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchPeople = ({ queryKey }) => {
    const id = queryKey[1];
    console.log(id)
    return axios.get(`http://localhost:4000/peoples/${id}`);
}

const usePersonById = (id) => {
    const queryClient = useQueryClient();
    return useQuery(["peoples", id], fetchPeople, {
        initialData: () => {
            const person = queryClient.getQueryData('peoples')?.data?.find(person => person.id === parseInt(id))
            if (person) {
                return { data: person }
            }
            else {
                return undefined
            }
        }
    });
}

export default usePersonById