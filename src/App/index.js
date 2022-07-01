import React, {useState} from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme.js"
import FormData from '../Form';
const type = "course";
const courseForm = [
  {
    name: "Course",
    placeholder: "Enter name of the course",
    id: "student-field",
    type: "text",
    validation: { isRequired: true, isEmail: false, maxCharacters: 50 },
  },
  {
    name: "Description",
    placeholder: "Describe the course",
    id: "password-field",
    type: "text",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
  {
    name: "Start Date",
    placeholder: "Entert the start date",
    id: "start-date-field",
    type: "date",
    validation: { isRequired: true, isEmail: true, minChar: 50 },
  },
  {
    name: "Finish Date",
    placeholder: "Entert the finish date",
    id: "start-date-field",
    type: "date",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
];

const studentForm = [
  {
    Id: 1,
    name: "Student",
    placeholder: "Enter the name",
    id: "student-field",
    type: "text",
    validation: { isRequired: true, isEmail: false, maxCharacters: 50 },
  },
  {
    Id: 2,
    name: "Email",
    placeholder: "Enter your e-mail",
    id: "email-field",
    type: "email",
    validation: { isRequired: true, isEmail: true, minChar: 50 },
  },
  {
    name: "Password",
    placeholder: "Enter your new password",
    id: "password-field",
    type: "password",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
  {
    name: "Password2",
    placeholder: "Enter your new password",
    id: "password-field2",
    type: "password",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
  {
    name: "Date",
    placeholder: "Enter your Birth date",
    id: "date-Field",
    type: "date",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
  {
    name: "Country",
    placeholder: "Select your courrent country",
    id: "country-field",
    type: "autocomplete",
    countries: [
      { id: 1, name: "Bolivia" },
      { id: 2, name: "Colombia" },
      { id: 3, name: "Argentina" },
    ],
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
];

const subjectForm = [
  {
    name: "Trainer Name",
    placeholder: "Enter trainer's name",
    id: "trainer-field",
    type: "trainer-name",
    validation: { isRequired: true, isEmail: false, maxCharacters: 50 },
  },
  {
    name: "subject Name",
    placeholder: "Enter the subject name",
    id: "subject-field",
    type: "subject-name",
    validation: { isRequired: true, isEmail: false, maxCharacters: 50 },
  },
  {
    name: "Start Date",
    placeholder: "Enter the start date",
    id: "date-Field",
    type: "date",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
  {
    name: "Start Time",
    placeholder: "Enter the start time",
    id: "start-time-field",
    type: "time",
    validation: { isRequired: true, isEmail: true, minChar: 50 },
  },
  {
    name: "Finish Time",
    placeholder: "Enter the finish time",
    id: "finish-time-field",
    type: "time",
    validation: { isRequired: true, isEmail: true, minChar: 50 },
  },
  {
    name: "Days of the week",
    placeholder: "Select the days of the week",
    id: "days-field",
    type: "select",
    days: [
      { id: 1, name: "Monday" },
      { id: 2, name: "Tuesday" },
      { id: 3, name: "Wednesday" },
      { id: 4, name: "Thrusday" },
      { id: 5, name: "friday" },
    ],
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
];



function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div>
      {!isSubmited ? (
        <FormData inputData={courseForm} type={type} submitForm={() => setIsSubmited(true)}     />
      ) : (<p>es un ganso</p>
      )}
    </div>
    </ThemeProvider>
  );
}

export default App;
