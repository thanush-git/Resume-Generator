import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import "../forms.css";

function Forms() {
  return (
    <div className="formsContainer">
      <h1>Personal Information</h1>
      <div className="names">
        <TextField id="firstName" label="First Name" variant="standard" />
        <TextField id="standard-basic" label="Last Name" variant="standard" />
      </div>
      <div className="profile">
        <div>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="LinkedIn" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Portfolio Link"
            placeholder="GitHub Profile"
            variant="outlined"
          />
        </div>
      </div>
       <div>
          <Button variant="contained">Save</Button>
          <Button variant="outlined">Edit</Button>
        </div>
    </div>
  );
}

export default Forms;
