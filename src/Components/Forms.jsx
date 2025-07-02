import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Projects";
import "../forms.css";
import { useState } from "react";

  function Forms(){
  return (
    <>
    <Personal/>
    <Education />
    <Experience />
    <Project />
    </>
  );
}

export default Forms;
