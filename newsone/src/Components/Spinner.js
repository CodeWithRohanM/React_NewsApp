import { Component } from "react";
import loading from "./loading.gif";

export default class Spinner extends Component{
    render() {
      return (
        <div className="flex justify-center my-12">
          <img src={loading} alt="Spinner"></img>
        </div>
      )
    }
}