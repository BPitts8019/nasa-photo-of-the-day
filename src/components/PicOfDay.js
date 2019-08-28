import React from "react";
import ImageLink from "./ImageLink.js";
import ImageOverlay from "./ImageOverlay.js";

export default function PicOfDay ({title, basePic, largePic, explanation}) {
   return (
      <article className="apod-container">
         <ImageLink basePic={basePic} largePic={largePic}
            altText={"See Explanation.  Clicking on the picture will download the highest resolution version available."}
         />
         <ImageOverlay title={title} explanation={explanation} />
         {/* <i class="fas fa-angle-double-left fa-4x"></i>
         <i class="fas fa-angle-double-right fa-4x"></i> */}
         {/* <i class="fas fa-chevron-left fa-4x"></i>
         <i class="fas fa-chevron-right fa-4x"></i> */}
      </article>
   );
};
