import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SelectCustomizer(props) {
  const { options, id, handleChangeSelect, oldOption } = props;
  console.log(oldOption.name);
  const [value, setValue] = React.useState(oldOption);
  // const [inputValue, setInputValue] = React.useState(oldOption.name);
  console.log(value);
  return (
    <div>
      <br />
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name}
        value={oldOption}
        onChange={(event, newValue) => {
          handleChangeSelect(id, newValue);
          setValue(newValue);
        }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   setInputValue(newInputValue);
        //   console.log(newInputValue);
        // }}
        getOptionSelected={(option, value) => {
          console.log(value);
        }}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label={id === "book" ? "Select Book" : "Select Borrower"}
            variant="outlined"
          />
        )}
      />
    </div>
  );
}
