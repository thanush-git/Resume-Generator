import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function PersonalItem({ data, onChange, editFlag }) {
  const handleChange = (key) => (e) => {
    let value = e.target.value;
    onChange(key, value);
  };

  const [isChecked, setChecked] = useState(false);

  const handleChangeCheckbox = () => {
    setChecked(true);

    if (isChecked) {
      setChecked(false);
    }
  };
  return (
    <div>
      <TextField
        label="First Name"
        value={data.fname}
        onChange={handleChange("fname")}
        disabled={editFlag}
      />
      <TextField
        label="Last Name"
        value={data.lname}
        onChange={handleChange("lname")}
        disabled={editFlag}
      />

      <TextField
        label="Phone Number"
        value={data.phno}
        onChange={handleChange("phno")}
        disabled={editFlag}
      />

      <TextField
        label="Email"
        value={data.email}
        onChange={handleChange("email")}
        disabled={editFlag}
      />

      <TextField
        label="LinkedIn"
        value={data.linkedin}
        onChange={handleChange("linkedin")}
        disabled={editFlag}
      />

      <TextField
        label="Portfolio Link"
        value={data.portfolio}
        onChange={handleChange("portfolio")}
        disabled={editFlag}
      />
    </div>
  );
}

function Personal({ personalList, setPersonalList }) {

  let [locked, setLock] = useState(false);

  const addPersonalListHandler = (field, value) => {
  let updated_list = { ...personalList, [field]: value };
  setPersonalList(updated_list);
};


  const submitHandler = () => {
    setLock(true);
  };

  const editHandler = () => {
    setLock(false);
  };

  return (
    <div>
      <h1>Personal</h1>
          <PersonalItem
            data={personalList}
            onChange={addPersonalListHandler}
            editFlag={locked}
          />
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

export default Personal;
