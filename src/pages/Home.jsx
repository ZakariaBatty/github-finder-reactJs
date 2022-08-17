import React from 'react'
import UserResults from "../components/users/UserResults"
import UserSearsh from "../components/users/UserSearsh"


const Home = () => {
    return (
        <>
            <UserSearsh />
            <UserResults />
        </>
    )
}

export default Home