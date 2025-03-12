import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };

  const handleChange = (event) => {
    setNewMovie(event.target.value);
  };

  return (
    <>
      <input onChange={(e) => handleChange(e)} value={newMovie} />
      <button onClick={handleClick}>Add Movie</button>
    </>
  );
};
