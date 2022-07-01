let date = new Date();
let outputDate = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
console.log(outputDate);

const courseForm = [
  {
    id: "courseNameField",
    name: "courseName",
    type: "text",
    placeholder: "Enter name of the Course",
    label: "Course Name",
    errorMessage: "Course name must have 3-50 chracteres and no especial characters",
    validation: { pattern: "^[A-Za-z0-9]{3,50}$", isDate: false },
  },
  {
    id: "courseDescriptionField",
    name: "courseDescription",
    type: "text",
    placeholder: "Describe the Curse",
    label: "Course Description",
    errorMessage: "Enter the Course Description", 
    validation: { pattern: "^[A-Za-z0-9]{5,300}$", isDate: false },
  },
  {
    id: "startDateCourseField",
    name: "startDate",
    type: "date",
    placeholder: "Entert the start date",
    label: "Start Date Course",
    errorMessage: "The course cannot start today",
    validation: { pattern: null, isDate: true },
  },
  {
    id: "finishDateCoursField",
    name: "finishDate",
    placeholder: "Entert the finish date",
    type: "date",
    label: "Finishi Course Date",
    validation: { isDate: true },
    errorMessage: "The finish date should be higher than start date"
  },
];

const studentForm = [
  {
    id: "name-student-field",
    name: "student",
    placeholder: "Enter the student's name",
    type: "text",
    errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[A-Za-z0-9]{3,16}$",
  },
  {
    id: "email-student--field",
    name: "email",
    placeholder: "Enter your e-mail",
    type: "email",
    errorMessage: "It should be a valid email address!",
  },
  {
    id: "password-student-field",
    name: "password",
    placeholder: "Enter your new password",
    type: "password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    errorMessage:
        "Password should be 8-20 characters and include at least",
  },
  {
    id: "password-student-confirmation-field",
    name: "passwordConfirmation",
    placeholder: "Confirm your password",
    type: "password",
    pattern: "comparar",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
    errorMessage:
    "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  },
  {
    id: "birthdate-student-field",
    name: "birthdayStudent",
    placeholder: "Enter your Birthdate",
    type: "date",
    pattern: !outputDate,
  },
  {
    id: "country-student-field",
    name: "studentCountry",
    placeholder: "Select your courrent country",
    type: "autocomplete",
    countries: [
      { id: 1, name: "Bolivia" },
      { id: 2, name: "Colombia" },
      { id: 3, name: "Argentina" },
    ],
  },
];

const subjectForm = [
  {
    id: "trainer-subject-field",
    name: "trainer-name",
    placeholder: "Enter trainer's name",
    type: "trainer-name",
    pattern: "^[A-Za-z]{3,50}$",
    errorMessage:
    "Username should be 3-16 characters and shouldn't include any special character!",
  },
  {
    id: "subject-field",
    name: "subject-name",
    placeholder: "Enter the subject name",
    pattern: "^[A-Za-z0-9]{3,50}$",
    type: "subject-name",
    errorMessage:
    "Username should be 3-50 characters and shouldn't include any special character!",
  },
  {
    id: "start-date-field",
    name: "start-subject-date",
    placeholder: "Enter the start date",
    type: "date",
    validation: { isRequired: true, isEmail: false, minChar: 5 },
  },
  {
    name: "Start Time",
    placeholder: "Enter the start time",
    id: "start-time-subject-field",
    type: "time",
    validation: { isRequired: true, isEmail: true, minChar: 50 },
  },
  {
    name: "Finish Time",
    placeholder: "Enter the finish time",
    id: "finish-time-subject-field",
    type: "time",
    validation: { isRequired: true, isEmail: true, minChar: 50 },
  },
  {
    name: "Days of the week",
    placeholder: "Select the days of the week",
    id: "days-subject-field",
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

function getInputFields(type) {
    if(type === "course") {
        return courseForm; 
    }
    if(type === "student")
    {
        return studentForm;
    }
    if(type === "subject")
    {
        return subjectForm;
    }
}

export default getInputFields;