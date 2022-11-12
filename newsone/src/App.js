import React, { Component } from "react";
import Header from "./Components/Header";
import News from "./Components/News";
import Business from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/business.png";
import General from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/general.png";
import Health from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/health.png";
import Movie from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/movie.png";
import Science from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/science.png";
import Sports from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/sports.png";
import Technology from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/Icons/technology.png";


import sportsImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/BackgroundImages/sports.jpg";
import businessImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/BackgroundImages/business.jpg";
import entertainmentImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/BackgroundImages/entertainment.jpg";
import healthImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/BackgroundImages/health.jpg";
import scienceImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/BackgroundImages/science.jpg";
import technologyImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/BackgroundImages/technology.jpg";
import globalImage from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/abstract.jpg";





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
              <News key="general" pageSize={6} category={"general"} county="in" headline={"TOP GLOBAL HEADLINES"} icon={General} backgroundImage = {globalImage}/>
            </>
          }></Route>

          <Route exact path="/sports" element={
            <>
              <Header />
              <News key="sports" pageSize={6} category={"sports"} county="in" headline={"TOP SPORTS HEADLINES"} icon={Sports} backgroundImage = {sportsImage}/>
            </>
          }></Route>

          <Route exact path="/health" element={
            <>
              <Header />
              <News key="health" pageSize={6} category={"health"} county="in" headline={"TOP HEALTH HEADLINES"} icon={Health} backgroundImage = {healthImage}/>
            </>
          }></Route>

          <Route exact path="/business" element={
            <>
              <Header />
              <News key="business" pageSize={6} category={"business"} county="in" headline={"TOP BUSINESS HEADLINES"} icon={Business} backgroundImage = {businessImage}/>
            </>
          }></Route>

          <Route exact path="/entertainment" element={
            <>
              <Header />
              <News key="entertainment" pageSize={6} category={"entertainment"} county="in" headline={"TOP ENTERTAINMENT HEADLINES"} icon={Movie} backgroundImage = {entertainmentImage}/>
            </>
          }></Route>

          <Route exact path="/science" element={
            <>
              <Header />
              <News key="science" pageSize={6} category={"science"} county="in" headline={"TOP SCIENCE HEADLINES"} icon={Science} backgroundImage = {scienceImage}/>
            </>
          }></Route>

          <Route exact path="/technology" element={
            <>
              <Header />
              <News key="technology" pageSize={6} category={"technology"} county="in" headline={"TOP TECHNOLOGY HEADLINES"} icon={Technology} backgroundImage = {technologyImage}/>
            </>
          }></Route>


        </Routes>

      </Router>

    </div>
  }
}