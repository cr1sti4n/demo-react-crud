import React, { useState } from "react";
//import { DB_PATH } from "../secret/db-data";

const FormContext = React.createContext({
  formData: {
    name: "",
    language: "",
  },
  nameHandler: (event) => {},
  languageHandler: (event) => {},
  submitForm: (closeModal) => {},
  isError: false,
  toggleError: (value) => {},
  isLoading: false,
});

export const FormContextProvider = (props) => {
  const [nameText, setNameText] = useState("");
  const [languageText, setLanguageText] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const nameChangeHandler = (event) => {
    setNameText(event.target.value);
  };

  const languageChangeHandler = (event) => {
    setLanguageText(event.target.value);
  };

  const toggleErrorHandler = (value) => {
    setError(value);
  };

  const submitFormHandler = async (closeModal) => {
    if (nameText.trim().length === 0 || languageText.trim().length === 0) {
      setError(true);
      return;
    }
    setLoading(true);
    await sendNewData(nameText, languageText);
    setLoading(false);
    closeModal();
  };

  return (
    <FormContext.Provider
      value={{
        formData: {
          name: nameText,
          language: languageText,
        },
        submitForm: submitFormHandler,
        nameHandler: nameChangeHandler,
        languageHandler: languageChangeHandler,
        isError: error,
        toggleError: toggleErrorHandler,
        isLoading: loading,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

const sendNewData = async (name, language) => {
  await fetch('' + "data.json", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      language: language,
    }),
  });
};

export default FormContext;
