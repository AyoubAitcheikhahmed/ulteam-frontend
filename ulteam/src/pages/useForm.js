import { useState, useEffect } from "react";

export const useForm = (callback, validate) => {

    const [values, setValues] = useState({
      username: '',
      email: '',
      password: '',
      password2: ''
    
    });

    const [ warnings, setWarnings] = useState({});

    const handleChange = event => {
        const { name ,value } = event.target;

        setValues({
            ...values,
            [name]: values
        });
    };
    
    return { handleChange };
};

export default useForm;