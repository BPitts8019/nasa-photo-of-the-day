import React from "react";
import "./App.css";

import PicOfDay from "./components/PicOfDay.js";

function App() {
   return (
      <div className="App">
         {/* <p>
            Read through the instructions in the README.md file to build your NASA
            app! Have fun 🚀!
         </p> */}
         <header>
            <p>NASA Astronomy Picture of the Day</p>
         </header>
         <article>
            <PicOfDay basePic ="https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_960.jpg"
               largePic="https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_2200.jpg"
               explanation="Why is the sky near Antares and Rho Ophiuchi so dusty yet colorful? The colors result from a mixture of objects and processes. Fine dust illuminated from the front by starlight produces blue reflection nebulae. Gaseous clouds whose atoms are excited by ultraviolet starlight produce reddish emission nebulae. Backlit dust clouds block starlight and so appear dark. Antares, a red supergiant and one of the brighter stars in the night sky, lights up the yellow-red clouds on the lower left of the featured image. Rho Ophiuchi lies at the center of the blue nebula near the top. The distant globular cluster M4 is visible to the right of Antares. These star clouds are even more colorful than humans can see, emitting light across the electromagnetic spectrum."
            />
         </article>
         <footer>
            <i className="far fa-copyright"></i>
            <p>NASA APOD 2019</p>
         </footer>
      </div>
   );
}

export default App;
