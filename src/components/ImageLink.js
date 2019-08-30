import React from "react";
import styled from "styled-components";

const Image = styled.img`
   transition: 0.5s ease-in-out;
   width: auto;
`;

export default function ImageLink ({height, width, basePic, largePic, altText, className="", target="_self", overlay}) {
   return (
      <a href={largePic} target={target} className={className}>
         <Image width={width} height={height} 
            src={basePic}
            alt={altText}
         />
         {(overlay)? overlay : ""}
      </a>
   );
};