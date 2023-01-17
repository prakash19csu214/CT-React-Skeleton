import React, { useContext } from "react";
import Card from "../../Components/Card";
import { MovieContext } from "../../Layouts/Main";
import "./index.css";

export default function Trending() {
  const movies = useContext(MovieContext);
  return (
    <>
      <div className="container">
        <div className="row">
            <Card />
        </div>
      </div>
    </>
  );
}
