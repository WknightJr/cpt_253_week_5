import * as React from 'react'
import { Link } from "react-router-dom";
//Here I import a link component//

export const ErrorPage = () => {   

    return (
        <>
        <h1>You have received an error</h1>

        <Link to="/">Home from link</Link>
        </>
    )
}
//This is a link to the home page//
