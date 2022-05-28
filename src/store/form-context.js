import React, { useState } from "react";
import { Create } from '../api/user'

const FormContext = React.createContext({
  formData: {
    name: "",
    lastName: "",
    email: "",
  },
  nameHandler: (event) => {},
  lastNameHandler: (event) => {},
  emailHandler: (event) => {},
  languageHandler: (event) => {},
  submitForm: (closeModal) => {},
  isError: false,
  toggleError: (value) => {},
  isLoading: false,
});

export const FormContextProvider = (props) => {
  const [nameText, setNameText] = useState("");
  const [lastNameText, setLasNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const nameChangeHandler = (event) => {
    setNameText(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLasNameText(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmailText(event.target.value);
  };


  const toggleErrorHandler = (value) => {
    setError(value);
  };

  const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }

  const submitFormHandler = async (closeModal) => {

    if (nameText.trim().length === 0 || lastNameText.trim().length === 0 || emailText.trim().length === 0) {
      setError("Debe completar los campos.");
      return;
    }
    if(!validateEmail(emailText)) {
      setError("Debe ingresar un email valido.");
      return;
    }

    setLoading(true);
    await sendNewData(nameText, lastNameText, emailText);
    setLoading(false);
    closeModal();
  };

  return (
    <FormContext.Provider
      value={{
        formData: {
          name: nameText,
          lastName: lastNameText,
          email: emailText,
        },
        submitForm: submitFormHandler,
        nameHandler: nameChangeHandler,
        lastNameHandler: lastNameChangeHandler,
        emailHandler: emailChangeHandler,
        isError: error,
        toggleError: toggleErrorHandler,
        isLoading: loading,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

const sendNewData = async (name, lastName, email) => {
  const {data} = await Create({name, lastName, email});
  console.log(data)
};

export default FormContext;
