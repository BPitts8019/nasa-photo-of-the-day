import React from "react";

export default function ImageLink ({basePic, largePic, altText, target="_self"}) {
   return (
      <a href={largePic} target={target}>
         <img src={basePic}
            alt={altText}
         />
      </a>
   );
};