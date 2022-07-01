export default function validateInfo(values, formFields) {
    const errors = {};
    for (let i = 0; i < formFields.length; i += 1) {
      const { id, text, rule } = formFields[i];
      if (rule.isRequired && !values[id]) {
  
        errors[id] = `${text} is required`;
      } else if (rule.validation(values[id])) {
        errors[id] = rule.errorMessage;  
      }
    }
    return errors;
}
  
  
  