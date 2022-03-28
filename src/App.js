import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState, useContext, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import FormContext from "./store/form-context";
import DataContext from "./store/data-context";
import { Get } from './api/average'
import { Badge } from "react-bootstrap";

function App() {
  const formCtx = useContext(FormContext);
  const dataCtx = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [average, setAverage] = useState(0);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    formCtx.toggleError(false);
    setShowModal(false);
    dataCtx.fetchData();
    getAverage();
  };

  const getAverage = async () => {
    const {data} = await Get()
    setAverage(data.average)
  } 

  // FETCH DATA
  useEffect(() => {
    dataCtx.fetchData();
    getAverage()
  }, []);

  return (
    <div className='container-fluid d-flex align-items-center flex-column'>
      <h1 className='p-5'>DEMO REACT</h1>
      {dataCtx.isLoading ? (
        <Spinner animation='border' />
      ) : (
        <>
          <Button variant='success' className='mb-4' onClick={showModalHandler}>
            Nuevo
          </Button>
          <Modal show={showModal} onClose={closeModalHandler} />
          <Table data={dataCtx.data} />
          <h2>
             <Badge bg="secondary">Promedio: {average}</Badge>
          </h2>
        </>
      )}
    </div>
  );
}

export default App;
