import TextField from "@mui/material/TextField";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";


function EducationItem({data, index, onChange, editFlag}) {

 const handleChange = (key) => (e) => {
  const value = e?.target?.value ?? e;
  onChange(index, key, value);
};

  return (
    <div>
      <TextField
        label="University"
        value={data.university}
        onChange={handleChange("university")}
        disabled = {editFlag}
      />
      <TextField
        label="Place"
        value={data.place}
        onChange={handleChange("place")}
        disabled = {editFlag}
      />
      <TextField
        label="Course"
        value={data.course}
        onChange={handleChange("course")}
        disabled = {editFlag}

      />
      <DatePicker
        label="Start"
        views={["month", "year"]}
        value={data.startDate}
        onChange={handleChange("startDate")}
        slotProps={{ textField: { variant: "outlined" } }}
        disabled = {editFlag}

      />
      <DatePicker
        label="End"
        views={["month", "year"]}
        value={data.endDate}
        onChange={handleChange("endDate")}
        slotProps={{ textField: { variant: "outlined" } }}
        disabled = {editFlag}
      />
    </div>
  );
}

function Education({edList, setEdList}) {

    const newObj = {
    university: "",
    place: "",
    course: "",
    startDate: null,
    endDate: null,
  };

  let [locked, setLock] = useState(false);

  //Handles change in every object's field (key) by creating a copy of the existing list, performing updation and savinf it back
  const addEdListHandler = (index,field,value) => {
    let updated_list = [...edList];
    updated_list[index][field] = value;
    setEdList(updated_list);
  } 

  //Creates a new blank object when add new education item button is clicked
  const addNewEdItem = () => {
    let updated_list = [...edList,newObj];
    setEdList(updated_list);
  }

  const submitHandler = () => {
    console.log(edList);
    setLock(true);
  }

  const editHandler = () => {
    setLock(false);
  }

  return (
    <>
    <h1>Education</h1>
      {edList.map((item, idx) => {
        return(
        <EducationItem data={item} index={idx} key={idx} onChange={addEdListHandler} editFlag={locked}/>
        );
      })}
      <Fab color="primary" aria-label="add" onClick={addNewEdItem}>
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

export default Education;
