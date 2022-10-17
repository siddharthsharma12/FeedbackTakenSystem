import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
      
  const [values, setValues] = useState({
   
    password: '',
    password2: '',
    passwordold: '',
  });
      
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name,value)
    setValues({
      ...values,
      [name]:value
    });
   
  };
   
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    console.log(values)
  };
   
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;