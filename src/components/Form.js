import { Form } from "react-bootstrap";
import FormContext from "../store/form-context";
import { useContext } from "react";


const MyForm = () => {
  const formCtx = useContext(FormContext);

  return (
    <Form>
      {formCtx.isError && (
        <h6 className='text-danger text-center'>
         {formCtx.isError}
        </h6>
      )}
      <Form.Group>
        <Form.Label>Nombres</Form.Label>
        <Form.Control
          placeholder='Enter Your Name'
          onChange={formCtx.nameHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Apellidos</Form.Label>
        <Form.Control
          placeholder='Enter Your Last Name'
          onChange={formCtx.lastNameHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter Your Email'
          onChange={formCtx.emailHandler}
        />
      </Form.Group>
    </Form>
  );
};

export default MyForm;
