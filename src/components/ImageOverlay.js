import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
   color: white;
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;

   display: flex;
   justify-content: center;
`;

const Caption = styled.div`
   border: 2px solid lightslategrey;
   border-radius: 4rem;
   border-top-right-radius: 0;
   box-shadow: 0 2px 10px 4px lightslategrey;
   opacity: 0;
   width: 60%;
   height: fit-content;
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
   -ms-transform: translateY(-50%);
   transition: 0.5s ease-in-out;

   & > * {
      padding: 2rem;
   }
   & h2 {
      border-bottom: 2px solid lightslategrey;
   }
   & p {
      line-height: 20px;
   }
`;

export default function ImageOverlay ({title, explanation}) {
   return (
      <Overlay>
         <Caption className="inner">
            <h2>{title}</h2>
            <p>{explanation}</p>
         </Caption>
      </Overlay>
   );
};