import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../Layouts/Main";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "./index.css";

function Row({ title }) {
    
    const movies = useContext(MovieContext);
  
  return (
    <div className="container">
    <div className="my-5">
      <h2 style={{'color': 'white'}}> {title || <Skeleton />} </h2>
      

      <div className="row_posters">
        {/* poster */}

        {movies ? (
          movies.map((movie, index) => (
            <img 
              key={index}
              className={"row_poster"}
              src={movie.Poster}
              alt={movie.Title}
            />
          ))
        ) : (
          <>
           
            <Skeleton className="skel" />
           
            <Skeleton className="skel" />
           
            <Skeleton className="skel" />
           
            <Skeleton className="skel" />
          </>
        )}
      </div>
      </div>
      </div>
  );
}

export default Row;
