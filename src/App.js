
import React from "react"
import SearchMovies from "./SearchMovies.js"
import './style.css'


const App = () => {
    return (
        <div className = "container">
            <h1 className = "title"> React Based Movie Search App </h1>
            <SearchMovies/>
        </div>
    )
}

export default App;
