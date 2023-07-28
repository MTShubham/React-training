// import axios from 'axios';
import { request } from '../utils/axios.utils'
import { useMutation, useQueryClient } from 'react-query'

// mutation - post or update or delete is known to be mutate

const useAddPerson = () => {
    const queryClient = useQueryClient();

    const addPerson = (personData) => {
        // return axios.post('http://localhost:4000/peoples', personData);
        return request({ url: '/peoples', method: 'post', data: personData });
    }

    // It is asynchronous in nature
    return useMutation(addPerson, {
        // This will be executed before mutating to the database
        onMutate: async (newPersonData) => {
            await queryClient.cancelQueries('peoples');     // To manually cancel the queries
            const previousData = queryClient.getQueryData(['peoples'])
            queryClient.setQueryData(['todos'], newPersonData)
            return { previousData, newPersonData }
        },
        onError: (err, newPersonData, context) => {
            queryClient.setQueryData(
                ['peoples', context.newPersonData],
                context.previousData
            )
        },
        onSuccess: (data) => {
            // without invalidateQueries when we save the data it will not reflect in the rendered data. We have to manually refetch it. Using invalidateQueries it auto fetch the api after save
            // Disadvantage of invalidate: request the api for the data.
            // queryClient.invalidateQueries('peoples')

            // When we save the data it sends saved data in the response so we can save that data into the cache so that no need to again requesting to the api.
            queryClient.setQueryData('peoples', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]
                }
            })
        }
    });
}

export default useAddPerson
