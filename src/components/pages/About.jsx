import React from "react";
import Welcome from "./sections/Welcome";
import WhatIDo from "./sections/WhatIDo";
import Career from "./sections/Career"
import Toolbelt from "./sections/Toolbelt";

function About() {
  return (
    <React.Fragment>
      <Welcome />
      <Career />
      <Toolbelt />
    </React.Fragment>
  );
}

export default About;
