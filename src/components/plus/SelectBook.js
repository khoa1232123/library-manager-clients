import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function SelectBook() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      fullWidth
      renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
];