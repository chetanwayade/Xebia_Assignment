import { useState, useEffect} from 'react';

const useForm = (validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting && Object.keys(touched).length === 0) {
      validate();
    }
  }, [errors, touched])

  const handleBlur = (event) => {
    const update = ({ ...values, [event.target.name]: event.target.value });
    setValues(update);
    const touch = ({ ...touched, [event.target.name]: true });
    setTouched(touch)
    setErrors(validate(update, touch));
  }

  const handleSubmit = (event) => {
  
    event.preventDefault();
    setIsSubmitting(true);
    if(errors) {

      const fields = Array.prototype.slice.call(event.target)
      .filter(el => el.name)
      .reduce((form, el) => ({
        ...form,
        [el.name]: true,
      }), {})
      setTouched(fields)
      setErrors(validate(values, fields));
      }
  }

  return {
    handleSubmit,
    values,
    errors,
    handleBlur,
    setValues
  }
}

export default useForm;