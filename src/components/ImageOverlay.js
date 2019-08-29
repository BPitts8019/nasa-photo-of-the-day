import React from "react";

export default function ImageOverlay ({title, explanation}) {
   return (
      <div className="overlay">
         <div className="inner">
            <h2>{title}</h2>
            <p>{explanation}</p>
         </div>
      </div>
   );
};