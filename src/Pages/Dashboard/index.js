import React from "react";
import Row from "../../Components/Row";
import "./index.css";

const Dashboard = () => {
  return (
    <>
      <Row title="Amazon Originals"/>
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Row title="Horror Movies" />
      <Row title="Romance Movies" />
      <Row title="Documentaries" />
    </>
  );
};

export default Dashboard;
