    import React from "react";
    import { useContext } from "react";
    import { MovieContext } from "../../Layouts/Main";
    import './index.css'
    import Skeleton from "react-loading-skeleton";
    import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../CardSkeleton";

    function Card() {
    const movies = useContext(MovieContext);

      return (
    <div className="container">
      <div className="my-5">
          {movies ?
            movies.map((movie, index) => (
              <>
              <div className="container">
                <div className="row mt-3">
                  <div className="col-12 col-md-4 d-flex justify-content-center">
                    <img
                      key={index}
                      className={"card_poster"}
                      src={movie.Poster}
                      alt={movie.Title}
                    />
                  </div>
                  <div className="col-12 col-md-6 offset-md-2">
                    <div className="row d-flex justify-content-center text-center">
                    <h2 style={{ color: "white" }}>{movie.Title}</h2>
                    </div>
                    <div className="row d-flex justify-content-center">
                    <h4 style={{ color: "white" }}>{movie.Year}</h4>
                    </div>
                    <div className="row d-flex justify-content-center">
                    <h4 style={{ color: "white" }}>{movie.Runtime}</h4>
                    </div>
                    
                  </div>
                </div>
                </div>
              </>
            ))
            : 
            <CardSkeleton cards={8}/>
          }
        </div>
      </div>
  );

    }

    export default Card;
