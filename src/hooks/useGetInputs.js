import MultiSelect from "../Form/Multiselect";
import CustumAutocomplete from "../Form/Autocomplete";
import { TextField } from "@mui/material";
import React, { useState } from 'react'

function useGetInputs(inputData, error) {
  const [data, setData] = useState([]);
const handleData = (value) => {
    setData(value)
};

const inputs = [];
    inputData.map( (element)=> {
        if (element.type === "select") {
            inputs.push(<div>
                         <br/>
                         <MultiSelect key={1} days={element.days}/>
                      </div>);
         
        }
        if (element.type === "autocomplete") {
          inputs.push(<div>
                        <br/>
                        <CustumAutocomplete key={3} countries={element.countries}/>
                      </div>);
          
        }
        if (element.type === "text" || element.type === "time" || element.type === "password" || element.type === "date" || element.type === "email") {
          inputs.push(<div>
                        <TextField
                          error={error}
                          key={element.name}
                          id={element.id}
                          required
                          placeholder={error ? `write ${element.name}`:" "}
                          type={element.type}
                          helperText={element.placeholder}
                          variant="outlined"
                          onChange={(e) => handleData(e.target.value)}
                          fullWidth
                        />
                      </div>);
        }
        return inputs;
      })
    return [inputs, data];
}

export default useGetInputs;