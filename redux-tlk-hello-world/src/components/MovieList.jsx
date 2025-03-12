import React from "react"
import { useSelector } from "react-redux"

export const MovieList = () => {
    const movies = useSelector((state) => state.movies.movies);
    return <div>
        {movies.map((movie) => {
            <div>{movie.name}</div>
        })}</div>
}