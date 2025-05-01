import React from "react";
import Welcome from "./sections/Welcome";
import WhatIDo from "./sections/WhatIDo";
import CareerJourney from "./sections/CareeerJourney";
import Toolbelt from "./sections/Toolbelt";

function About() {
  return (
    <React.Fragment>
      <Welcome />
      <WhatIDo />
      <CareerJourney />
      <Toolbelt />
    </React.Fragment>
  );
}

export default About;
