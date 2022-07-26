import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";





const App = () =>{

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    SearchMovie("SpiderMan");
  },[]);


  const SearchMovie = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }

  return(
    <div className="app">
      <h1>Movie Stream</h1>
      <div className="search">
        <input 
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)} 
          placeholder = "search for movies"
        />
        <img 
          src={SearchIcon}
          alt = 'search'
          onClick={()=>SearchMovie(searchTerm)}
        />
      </div>

      {movies?.length >0 ?(
        <div className="container">
          {movies.map((movie)=>(
          <MovieCard movie= {movie}/>))}
        </div>
      ):(
        <div>
          <h2>No Movie Found</h2>
        </div>
      )} 
    </div>
  );

}
export default App;