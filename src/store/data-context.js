import React, { useState } from "react";
//import { DB_PATH } from "../secret/db-data";

const DataContext = React.createContext({
  data: [],
  isLoading: false,
  fetchData: () => {},
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDataHandler = async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const resData = await response.json();

    let fetchedData = [];
    for (const key in resData) {
      fetchedData.push({
        name: resData[key].name,
        language: resData[key].language,
      });
    }

    setData(fetchedData);
    setLoading(false);
  };

  return (
    <DataContext.Provider
      value={{
        data: data,
        isLoading: loading,
        fetchData: fetchDataHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
