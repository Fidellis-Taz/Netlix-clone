import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      console.log(request.data.results);

      setMovies(request.data.results);
    };
    fetchData();

    /* whenever we are using a variable from outside the blokc we should pass it as aa dependency as it changes  */
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies &&
          movies.map((movie) => (
            <img
              /* each img must have an identity so that when one image changes react can identify the change and simply update faster */
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          ))}
      </div>
    </div>
  );
};

export default Row;
