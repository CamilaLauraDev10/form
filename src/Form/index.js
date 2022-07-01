import { Box, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import { AddButton } from '../theme/CustumButtons';
import PhotoChooser from './PhotoChooser'
import useGetInputs from '../hooks/useGetInputs';


function FormData({inputData, type, isSubmited}) {
  // const { handleChange, handleSubmit, values, errors } = useForm(
  //   submitForm,
  //   validate,
  //   formTable,
  // );
  const [error, setError] = useState(false); 
  const [inputs, data] = useGetInputs(inputData, error);

    console.log(data);
  
  // const [x, typeother] = useContext(FormContext);

    return(
        <Box>
      <Paper padding="10px" >
        <Typography
          variant='h1'
          color="secondary.light"
          align='center'
        >
          {`Register new ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        </Typography>
        <br/>
        <br/>
        <Grid  container alignItems="center" justifyContent="center">
          <Grid item xs={4}>
            <PhotoChooser/>
            <br/>
          </Grid>
          <Grid item xs={4}>
            {inputs}
          <br/>
          <AddButton>{`Add ${type}`}</AddButton>
          </Grid>
        </Grid>
        <br/>
      </Paper>
    </Box>
  );
}

export default FormData;