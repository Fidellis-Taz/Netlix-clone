import React, { useState } from "react";
import axios from "../api/axios";
const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      console.log(request.data);
      setMovies(request.data.resuslts);
    };
    fetchData();

    /* whenever we are using a variable from outside the blokc we should pass it as aa dependency as it changes  */
  }, [fetchURL]);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Row;
