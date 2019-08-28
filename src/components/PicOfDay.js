import React from "react";

export default function ({largePic, basePic, explanation}) {
   return (
      <div className="apod-container">
         <a href={largePic}>
            <img src={basePic} 
               alt="See Explanation.  Clicking on the picture will download the highest resolution version available."
            />
         </a>
         <div className="overlay">
            <p><b>Explanation: </b>{explanation}</p>
         </div>
      </div>
   );
};
