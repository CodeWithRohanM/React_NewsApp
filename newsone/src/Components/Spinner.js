import React from "react";
import loading from "./loading.gif";

const Spinner = () =>{
      return (
        <div className="flex justify-center my-12">
          <img src={loading} alt="Spinner"></img>
        </div>
      )
}

export default Spinner;