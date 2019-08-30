import React from "react";

export default function ImageLink ({height, width, basePic, largePic, altText, className="", target="_self", overlay}) {
   return (
      <a href={largePic} target={target} className={className}>
         <img width={width} height={height} 
            src={basePic}
            alt={altText}
         />
         {(overlay)? overlay : ""}
      </a>
   );
};