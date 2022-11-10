import React, { Component } from "react";
import Header from "./Components/Header";
import News from "./Components/News";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {


    return <div>

      <Router>

        <Routes>

          <Route exact path="/" element={
            <>
              <Header />
              <News key = "general" geSize={6} category={"general"} county="in" />
            </>
          }></Route>

          <Route exact path="/sports" element={
            <>
              <Header />
              <News key = "sports" pageSize={6} category={"sports"} county="in" />
            </>
          }></Route>

          <Route exact path="/health" element={
            <>
              <Header />
              <News key = "health" pageSize={6} category={"health"} county="in" />
            </>
          }></Route>

          <Route exact path="/business" element={
            <>
              <Header />
              <News key = "business" pageSize={6} category={"business"} county="in" />
            </>
          }></Route>


        </Routes>

      </Router>

    </div>
  }
}