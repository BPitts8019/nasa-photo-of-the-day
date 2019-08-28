import React from "react";

export default function ({largePic, basePic, explanation}) {
   return (
      <article className="apod-container">
         <a href={largePic} target="_blank">
            <img src={basePic}
               alt="See Explanation.  Clicking on the picture will download the highest resolution version available."
            />
         </a>
         <div className="overlay">
            <p><b>Explanation: </b>{explanation}</p>
         </div>
      </article>
   );
};
