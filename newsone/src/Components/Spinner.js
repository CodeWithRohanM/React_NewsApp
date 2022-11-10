import { Component } from "react";
import loading from "./Loading.gif";

export default class Spinner extends Component{
    render() {
      return (
        <div className="flex justify-center my-12 ">
          <img src={loading} alt="Spinner"></img>
        </div>
      )
    }
}