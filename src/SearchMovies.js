import React from "react"


 const SearchMovies = () =>{
     
    const [query, setQuery] = React.useState("")
    const [movies, setMovies] = React.useState([])
    
    const searchMovies = async (event) => {
        event.preventDefault()
        const api = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        fetch(api)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
    }
    
    const handleChange = (event) => {
       setQuery(event.target.value)
    }
    
    
   return (
        <>
            <form className = "form" onSubmit = {searchMovies}>
                <label 
                    htmlFor = "query" 
                    className = "label"/>
                <input 
                    type = "text" 
                    name = "query" 
                    placeholder = "Write movie title here!" 
                    value={query} 
                    onChange = {handleChange}/>
                <button 
                    type = "submit" 
                    className = "button"> Search </button>
            </form>
                <div className="card-list">
                    {movies.map(movie => 
                        <div 
                            className = "card" 
                            key={movie.id}>
                            <img className ="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt=""/>
                            <div className="movie-content">
                                <div className="movie=header">
                                    <h1 className="movie-title"> {movie.title} </h1>
                                    <h3> RELEASE DATE: {movie.release_date}</h3>
                                    <h3> Rating: {movie.vote_average}</h3>
                                    <h4> {movie.overview} </h4>
                                </div>
                            </div>    
                        </div>
                    )}
                </div>  
        </>
    )
}

export default SearchMovies;