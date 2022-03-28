import { Form } from "react-bootstrap";
import FormContext from "../store/form-context";
import { useContext } from "react";


const MyForm = () => {
  const formCtx = useContext(FormContext);

  return (
    <Form>
      {formCtx.isError && (
        <h6 className='text-danger text-center'>
          Ocurrió un error.
        </h6>
      )}
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          placeholder='Enter Your Name'
          onChange={formCtx.nameHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          placeholder='Enter Your Last Name'
          onChange={formCtx.lastNameHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fecha Nacimiento</Form.Label>
        <Form.Control
          type='date'
          placeholder='Enter Your Date of birth'
          onChange={formCtx.dateBirthHandler}
        />
      </Form.Group>
    </Form>
  );
};

export default MyForm;
