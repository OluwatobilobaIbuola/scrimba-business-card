import React from "react"
import "./Face.css"
import face from "./Facee.jpg" 


function Face (){
    return (
      <div className="image-container">
           <img class="face-img" src={face} alt="face-logo"/>
      </div>
       )
}

export default Face;
