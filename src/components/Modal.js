import { Modal, Button, Spinner } from "react-bootstrap";
import Form from "./Form";
import FormContext from "../store/form-context";
import { useContext } from "react";

const MyModal = (props) => {
  const formCtx = useContext(FormContext);

  const modalBodyClassName = formCtx.isLoading
    ? "d-flex justify-content-center"
    : "";

  return (
    <Modal show={props.show} onHide={props.onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Data</Modal.Title>
      </Modal.Header>
      <Modal.Body className={modalBodyClassName}>
        {formCtx.isLoading ? <Spinner animation='border' /> : <Form />}
      </Modal.Body>
      {!formCtx.isLoading && (
        <Modal.Footer>
          <Button
            variant='primary'
            onClick={() => formCtx.submitForm(props.onClose)}
          >
            Add Data
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default MyModal;
