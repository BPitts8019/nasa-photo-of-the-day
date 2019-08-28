import React from "react";

export default function ImageLink ({basePic, largePic, altText}) {
   return (
      <a href={largePic} target="_blank">
         <img src={basePic}
            alt={altText}
         />
      </a>
   );
};