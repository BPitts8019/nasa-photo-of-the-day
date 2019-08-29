import React from "react";

export default function ImageLink ({basePic, largePic, altText, className="", target="_self"}) {
   return (
      <a href={largePic} target={target} className={className}>
         <img src={basePic}
            alt={altText}
         />
      </a>
   );
};