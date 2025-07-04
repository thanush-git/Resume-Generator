import TextField from "@mui/material/TextField";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Textarea from "@mui/material/TextareaAutosize";

function ExperienceItem({ data, index, onChange, editFlag }) {
  const handleChange = (key) => (e) => {
    const value = e?.target?.value ?? e;
    onChange(index, key, value);
  };

  const [isChecked, setChecked] = useState(false);

  const handleChangeCheckbox = () => {
    setChecked(true);
    handleChange("endDate")(null);
    if(isChecked){
        setChecked(false);
    }
  };

  return (
    <div>
      <TextField
        label="Role"
        value={data.role}
        onChange={handleChange("role")}
        disabled={editFlag}
      />
      <TextField
        label="Organization"
        value={data.org}
        onChange={handleChange("org")}
        disabled={editFlag}
      />
      <TextField
        label="Place"
        value={data.place}
        onChange={handleChange("place")}
        disabled={editFlag}
      />
      <DatePicker
        label="Start"
        views={["month", "year"]}
        value={data.startDate}
        onChange={handleChange("startDate")}
        slotProps={{ textField: { variant: "outlined" } }}
        disabled={editFlag}
      />

      <FormControlLabel
  control={
    <Checkbox
      onChange={handleChangeCheckbox}
    />
  }
  label="Ongoing?"
/>

      {!(isChecked) && (
        <DatePicker
          label="End"
          views={["month", "year"]}
          value={data.endDate}
          onChange={handleChange("endDate")}
          slotProps={{ textField: { variant: "outlined" } }}
          disabled={editFlag}
        />
        )
    }

      <Textarea
        label="Description"
        placeholder="Press Enter for new lines"
        value = {data.desc}
        onChange={handleChange("desc")}
      />
    </div>
  );
}

function Experience({expList,setExpList}) {

  const newObj = {
    role: "",
    org: "",
    place: "",
    startDate: null,
    endDate: null,
    desc: "",
  };

  let [locked, setLock] = useState(false);

  //Handles change in every object's field (key) by creating a copy of the existing list, performing updation and savinf it back
  const addExpListHandler = (index, field, value) => {
    let updated_list = [...expList];
    updated_list[index][field] = value;
    setExpList(updated_list);
  };

  //Creates a new blank object when add new education item button is clicked
  const addNewExpItem = () => {
    let updated_list = [...expList, newObj];
    setExpList(updated_list);
  };

  const submitHandler = () => {
    console.log(expList);
    setLock(true);
  };

  const editHandler = () => {
    setLock(false);
  };

  return (
    <>
    <h1>Experience</h1>
      {expList.map((item, idx) => {
        return (
          <ExperienceItem
            data={item}
            index={idx}
            key={idx}
            onChange={addExpListHandler}
            editFlag={locked}
          />
        );
      })}
      <Fab color="primary" aria-label="add" onClick={addNewExpItem}>
        <AddIcon />
      </Fab>
      <div>
        <Button variant="contained" onClick={submitHandler}>
          Save
        </Button>
        <Button variant="outlined" onClick={editHandler}>
          Edit
        </Button>
      </div>
    </>
  );
}

export default Experience;
