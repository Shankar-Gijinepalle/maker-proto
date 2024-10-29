import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Pages/Home'

const ChildRoutes = ({ AdminRoute }) => {
    return (
        <>
            <Route path="/Home"><Home /></Route>
        </>
    )
}

export default ChildRoutes