import TextField from "@mui/material/TextField";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Textarea from "@mui/material/TextareaAutosize";

function ProjectItem({ data, index, onChange, editFlag }) {
  const handleChange = (key) => (e) => {
    const value = e?.target?.value ?? e;
    onChange(index, key, value);
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
        label="Title"
        value={data.title}
        onChange={handleChange("title")}
        disabled={editFlag}
      />
      <TextField
        label="Technologies used"
        value={data.tech}
        onChange={handleChange("tech")}
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
            inputProps={{ "aria-label": "Ongoing?" }}
          />
        }
        label="Ongoing?"
      />

      {!isChecked && (
        <DatePicker
          label="End"
          views={["month", "year"]}
          value={data.endDate}
          onChange={handleChange("endDate")}
          slotProps={{ textField: { variant: "outlined" } }}
          disabled={editFlag}
        />
      )}

      <Textarea
        label="Description"
        placeholder="Press Enter for new lines"
        value={data.desc}
        onChange={handleChange("desc")}
      />
    </div>
  );
}

function Project({ projList, setProjList }) {

   const newObj = {
    title: "",
    tech: "",
    startDate: null,
    endDate: null,
    desc: "",
  };

  let [locked, setLock] = useState(false);

  //Handles change in every object's field (key) by creating a copy of the existing list, performing updation and savinf it back
  const addProjListHandler = (index, field, value) => {
    let updated_list = [...projList];
    updated_list[index][field] = value;
    setProjList(updated_list);
  };

  //Creates a new blank object when add new education item button is clicked
  const addNewProjItem = () => {
    let updated_list = [...projList, newObj];
    setProjList(updated_list);
  };

  const submitHandler = () => {
    console.log(projList);
    setLock(true);
  };

  const editHandler = () => {
    setLock(false);
  };

  return (
    <>
      <h1>Projects</h1>
      {projList.map((item, idx) => {
        return (
          <ProjectItem
            data={item}
            index={idx}
            key={idx}
            onChange={addProjListHandler}
            editFlag={locked}
          />
        );
      })}
      <Fab color="primary" aria-label="add" onClick={addNewProjItem}>
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

export default Project;
