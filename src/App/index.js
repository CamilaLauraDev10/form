import React, {useState} from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme.js"
import FormData from '../Form';
import getInputFields from '../helper/getInputFields.js';

const type = "student";
const dataForm = getInputFields(type);

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div key={100}>
      {!isSubmited ? (
        <FormData inputData={dataForm} type={type} submitForm={() => setIsSubmited(true)}     />
      ) : (<p>no paso nada</p>
      )}
    </div>
    </ThemeProvider>
  );
}

export default App;
