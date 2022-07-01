import MultiSelect from "../Form/Multiselect";
import CustumAutocomplete from "../Form/Autocomplete";
import { TextField, Tooltip } from "@mui/material";
import React from 'react'
import validateInfo from "../helper/validateInputValues";
import useForm from ".";

function useGetInputs(inputData, type,submitForm ) {
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validateInfo,
  //   inputData,
  //   type
  // );

  const inputs = [];
    inputData.map( (element)=> {
        if (element.type === "select") {
            inputs.push(<div key={1} >
                         <br/>
                         <MultiSelect key={2} days={element.days}/>
                         <span>{element.errorMessage}</span>
                      </div>);
         
        }
        if (element.type === "autocomplete") {
          inputs.push(<div key={3}>
                        <br/>
                        <CustumAutocomplete key={4} countries={element.countries} />
                      </div>);
          
        }
        if (element.type === "text" || element.type === "time" || element.type === "password" || element.type === "date" || element.type === "email") {
          inputs.push(<div key={element.id}>
                        <Tooltip title={element.name} placement="top-start" arrow={true} open={true}>
                          <TextField
                            error={false}
                            name={element.name}
                            id={element.id}
                            required
                            placeholder={element.name}
                            type={element.type}
                            helperText={element.placeholder}
                            variant="outlined"
                            fullWidth
                          />
                        </Tooltip>
                      </div>);
        }
        return inputs;
      })
    return inputs
}

export default useGetInputs;