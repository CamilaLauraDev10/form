import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { AddButton } from '../theme/CustumButtons';
import PhotoChooser from './PhotoChooser'
import useGetInputs from '../hooks/useGetInputs';

function FormData({inputData, type, submitForm}) {
  const {inputs, handleSubmit } = useGetInputs(inputData, type,submitForm);
  
    return(
    <Box>
      <Paper padding="10px" >
        <form onSubmit={handleSubmit}>
          <Typography
            variant='h1'
            color="secondary.light"
            align="center"
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
            <AddButton type="submit">{`Add ${type}`}</AddButton>
            </Grid>
          </Grid>
          <br/>
       </form>
      </Paper>
    </Box>
  );
}

export default FormData;