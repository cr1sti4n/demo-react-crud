import React, { useState } from "react";
import { Get } from '../api/user'

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
    const {data} = await Get();
    setData(data);
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
