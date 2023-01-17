import React, { Component } from "react";
import axios from 'axios';
import Dashboard from "../../Pages/Dashboard";
import Header from "../Header";
import { Switch, Route, Redirect } from "react-router-dom";
import { createContext } from "react";
import { base_url } from "../../Config/config";
import Trending from "../../Pages/Trending";

export const MovieContext = createContext();

export default class Main extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
        const response = await axios.get(base_url);
        console.log(response)
        this.setState({ data: response.data.movies.slice(0, 4) });
    } catch (error) {
        console.error(error);
    }
  }



  render() {
    return (
      <div>
        <Header />
        <MovieContext.Provider value={this.state.data}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/trending" component={Trending} />
          <Redirect to="/dashboard" />
        </Switch>
        </MovieContext.Provider>
      </div>
    );
  }
}
