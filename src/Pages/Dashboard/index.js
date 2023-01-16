import React, { Component } from 'react'
import Row from '../../Components/Row';
import requests from '../../Middleware/requests';
import './index.css'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Row 
      title="Amazon Originals" 
      fetchUrl={requests.fetchAmazonOriginals}
      isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
      </>
    )
  }
}
