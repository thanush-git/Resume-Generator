import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function PersonalItem({ onSubmit, onEdit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const submitHandler = () => {
    let personalDetails = {
      firstName,
      lastName,
      phoneNo,
      email,
      linkedIn,
      portfolio,
    };
    onSubmit(personalDetails);
    setIsLocked(true);
  };

  const editHandler = () => {
    setIsLocked(false);
  };

  return (
    <div className="personalContainer">
      <h1>Personal Information</h1>
      <div className="names">
        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          disabled={isLocked}
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <TextField
          id="secondName"
          label="Last Name"
          variant="outlined"
          disabled={isLocked}
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div className="profile">
        <div>
          <TextField
            id="phoneNo"
            label="Phone Number"
            variant="outlined"
            disabled={isLocked}
            value={phoneNo}
            onChange={(event) => setPhoneNo(event.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            disabled={isLocked}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <TextField
            id="linkedin"
            label="LinkedIn"
            variant="outlined"
            disabled={isLocked}
            value={linkedIn}
            onChange={(event) => setLinkedIn(event.target.value)}
          />
          <TextField
            id="portfolio"
            label="Portfolio Link"
            placeholder="GitHub Profile"
            variant="outlined"
            disabled={isLocked}
            value={portfolio}
            onChange={(event) => setPortfolio(event.target.value)}
          />
        </div>
      </div>
      <div>
        <Button variant="contained" onClick={submitHandler}>
          Save
        </Button>
        <Button variant="outlined" onClick={editHandler}>
          Edit
        </Button>
      </div>
    </div>
  );
}

function Personal() {
  const [personalDetails, setPersonalDetails] = useState(null);

  const handlePersonalDetails = (personalDetailsObj) => {
    setPersonalDetails(personalDetailsObj);
    console.log(personalDetailsObj);
  };
  return(
    <PersonalItem onSubmit = {handlePersonalDetails} onEdit={personalDetails}/>
  )
}

export default Personal;
