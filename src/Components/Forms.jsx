import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Projects";
import Display from "./Display";
import "../forms.css";
import { useState } from "react";

function Forms() {

  let newPersonalObj = {
    fname: "",
    lname: "",
    phno: "",
    email: "",
    linkedin: "",
    portfolio: ""
  };

  const newEdObj = {
    university: "",
    place: "",
    course: "",
    startDate: null,
    endDate: null,
  };

  const newProjObj = {
    title: "",
    tech: "",
    startDate: null,
    endDate: null,
    desc: "",
  };

  const newExpObj = {
    role: "",
    org: "",
    place: "",
    startDate: null,
    endDate: null,
    desc: "",
  };

  let [personalList, setPersonalList] = useState(newPersonalObj);
  const [edList, setEdList] = useState([newEdObj]);
  const [expList, setExpList] = useState([newExpObj]);
  const [projList, setProjList] = useState([newProjObj]);

  let masterObj = { personalList, edList, expList, projList };

  return (
    <div className="container">
      <div className="form">
        <Personal
          personalList={personalList}
          setPersonalList={setPersonalList}
        />
        <Education edList={edList} setEdList={setEdList} />
        <Experience expList={expList} setExpList={setExpList} />
        <Project projList={projList} setProjList={setProjList} />
      </div>
      <div className="display">
        <Display masterObj={masterObj} />
      </div>
    </div>
  );
}

export default Forms;
