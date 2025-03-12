import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../movieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const handleRemoveMovie = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            {movie.name}
            <button onClick={() => handleRemoveMovie(movie.id)}>
              Delete Movie
            </button>
          </div>
        );
      })}
    </div>
  );
};
