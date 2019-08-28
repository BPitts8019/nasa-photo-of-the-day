import React from "react";

export default function ImageOverlay ({title, explanation}) {
   return (
      <div className="overlay">
         <h4>{title}</h4>
         <p><b>Explanation: </b>{explanation}</p>
      </div>
   );
};