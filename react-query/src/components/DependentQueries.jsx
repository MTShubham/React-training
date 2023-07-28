import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUser = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCourses = ({ queryKey }) => {
    return axios.get(`http://localhost:4000/courses/${queryKey[1]}`)
}

const DependentQueries = ({ email }) => {
    const { data: user, isLoading: userLoading, isError: userError } = useQuery(['user'], () => fetchUser(email));
    const courseId = user?.data.courseId;
    
    const { data: courses, isLoading: coursesLoading, isError: coursesError } = useQuery(['courses', courseId], fetchCourses, { enabled: !!user });

    if (userLoading || coursesLoading)
        return <p>Loading...</p>

    if (userError || coursesError)
        return <p>Error...</p>

    return (
        <div>
            {courses?.data.courses.map(course => <p>{course}</p>)}
        </div>
    )
}

export default DependentQueries
