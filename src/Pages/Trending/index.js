import React, { Component } from 'react'
import Card from '../../Components/Card';
import requests from '../../Middleware/requests';
import './index.css'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Card
          title="Card Title"
          description="Card description text goes here"
          image="path/to/image.jpg"
        />
      </>
    )
  }
}
