import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MultiSelect({days}) {
  const [day, setDay] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDay(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
      <FormControl sx={{ m: 1, width: "100%", marginTop: "30px" }}>
        <InputLabel id="demo-multiple-checkbox-label" >Choose the days</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          type="select"
         // value={day}
         // onChange={handleChange}
          input={<OutlinedInput  />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {days.map((d) => (
            <MenuItem key={d.id} value={d.name}>
              <Checkbox checked={day.indexOf(d.name) > -1} />
              <ListItemText primary={d.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}

export default MultiSelect;