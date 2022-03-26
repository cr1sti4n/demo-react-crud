import Table from "./components/Table";
import Modal from "./components/Modal";
import { useState, useContext, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import FormContext from "./store/form-context";
import DataContext from "./store/data-context";

function App() {
  const formCtx = useContext(FormContext);
  const dataCtx = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    formCtx.toggleError(false);
    setShowModal(false);
  };

  // FETCH DATA
  useEffect(() => {
    dataCtx.fetchData();
  }, []);

  return (
    <div className='container-fluid d-flex align-items-center flex-column'>
      <h1 className='p-5'>DEMO EXPRESS REACT</h1>
      {dataCtx.isLoading ? (
        <Spinner animation='border' />
      ) : (
        <>
          <Button variant='success' className='mb-4' onClick={showModalHandler}>
            Add New
          </Button>
          <Modal show={showModal} onClose={closeModalHandler} />
          <Table data={dataCtx.data} />
        </>
      )}
    </div>
  );
}

export default App;
