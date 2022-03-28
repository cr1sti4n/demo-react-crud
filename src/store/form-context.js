import React, { useState } from "react";
import { Create } from '../api/customer'

const FormContext = React.createContext({
  formData: {
    name: "",
    lastName: "",
    dateBirth: "",
  },
  nameHandler: (event) => {},
  lastNameHandler: (event) => {},
  dateBirthHandler: (event) => {},
  languageHandler: (event) => {},
  submitForm: (closeModal) => {},
  isError: false,
  toggleError: (value) => {},
  isLoading: false,
});

export const FormContextProvider = (props) => {
  const [nameText, setNameText] = useState("");
  const [lastNameText, setLasNameText] = useState("");
  const [dateBirthText, setDateBirthText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameChangeHandler = (event) => {
    setNameText(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLasNameText(event.target.value);
  };

  const dateBirthChangeHandler = (event) => {
    setDateBirthText(event.target.value);
  };


  const toggleErrorHandler = (value) => {
    setError(value);
  };

  const submitFormHandler = async (closeModal) => {
    if (nameText.trim().length === 0 || lastNameText.trim().length === 0 || dateBirthText.trim().length === 0) {
      setError(true);
      return;
    }
    setLoading(true);
    await sendNewData(nameText, lastNameText, dateBirthText);
    setLoading(false);
    closeModal();
  };

  return (
    <FormContext.Provider
      value={{
        formData: {
          name: nameText,
          lastName: lastNameText,
          dateBirth: dateBirthText,
        },
        submitForm: submitFormHandler,
        nameHandler: nameChangeHandler,
        lastNameHandler: lastNameChangeHandler,
        dateBirthHandler: dateBirthChangeHandler,
        isError: error,
        toggleError: toggleErrorHandler,
        isLoading: loading,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

const sendNewData = async (name, lastName, dateBirth) => {
  const {data} = await Create({name, lastName, dateBirth});
  console.log(data)
};

export default FormContext;
