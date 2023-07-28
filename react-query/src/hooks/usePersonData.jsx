// import axios from 'axios';
import { request } from '../utils/axios.utils'
import { useQuery } from 'react-query';


const fetchPeoples = () => {
    // return axios.get("http://localhost:4000/peoples");
    return request({ url: '/peoples' })
}

// syntax - useQuery(key, fetchData)

// options is a 3rd parameter of useQuery

// const options = {
//     // cachedTime: 5000,    // ms, default = 5min
//     // staleTime: 5000     // ms, default = 0ms, the duration until a query transitions from fresh to stale. As long as the query is fresh, data will always be read from the cache only.
//     // refetchOnWindowFocus: false     // If a user leaves your application and returns and the query data is stale, react-query automatically requests fresh data for you in the background. You can disable this globally or per-query
//     // refetchOnMount: true,
//     // refetchInterval: 1000,  // will refetch the data in regular interval. It's known as polling
//     // refetchIntervalInBackground: true,
//     enabled: false,
//     onSuccess: afterSuccess,
//     onError: afterError,
//     select: (data) => {
//         // callback function which will transform or manipulate the data after fetching
//         return data.data.map((people) => { return { ...people, name: people.name.toUpperCase() } });
//     }
// }

const usePersonData = (afterSuccess, afterError) => {
    return useQuery("peoples", fetchPeoples, {
        onSuccess: afterSuccess,
        onError: afterError,
        select: (data) => { return data.data.map((people) => { return { ...people, name: people.name.toUpperCase() } }) }
    });
}

export default usePersonData


// const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         queryFn: defaultQueryFn,
//       },
//     },
//   })
  