import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";

function CustumAutocomplete({ countries }) {
  const [country, setCountry] = useState(countries[0]);
  //console.log(movie);
  return (
    <Autocomplete
      value={country}
      disablePortal
      id="combo-box-demo"
      options={countries}
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.name}
      onChange={(event,value) => setCountry(value)}
      renderInput={(params) => <TextField {...params} label="Country" variant="outlined" fullWidth/>}
    />
  );
}

export default CustumAutocomplete;