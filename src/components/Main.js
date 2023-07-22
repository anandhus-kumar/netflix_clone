import React, { useEffect, useState } from "react";
import request from "../request.js";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios
      .get(request.requestTrending)
      .then((res) => {
        setMovies(res.data.results);
        setMovie(
          res.data.results[Math.floor(Math.random() * res.data.results.length)]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-[550px]  text-white">
      <div className="w-full h-full ">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black">
          
        </div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[200px] p-4 md:p-8 ">
          <h1 className="text-white text-2xl md:text-5xl font-bold">{movie?.title}</h1>
        <div className="py-3" >
          <button className="border bg-gray-300 border-gray-300 text-black py-2 px-5">Play</button>
            <button className="border  border-gray-300 text-white py-2 px-5 ml-2">Watch Later</button>
          </div>
          <p className="text-sm text-gray-400">Released: {movie?.release_date}</p>
          {
            expanded ? (<p>{movie?.overview}</p>) : (<p>{ movie?.overview.slice(0, 200)} ....</p> ) }
          {movie?.overview.length > 150 && (<button onClick={toggleExpanded}>
            {expanded ? 'read less': 'read more'}
          </button>)}
         
         
         
         
         
          {/* <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 pb-2"> {turncateString(movie.overview, 150)}</p> */}
          <p className="text-sm "> Rating: <span className="text-base">{ movie?.vote_average}  </span>⭐⭐⭐⭐</p>
       </div>
      </div>
    </div>
  );
};

export default Main;
