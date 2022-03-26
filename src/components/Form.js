import { Form } from "react-bootstrap";
import FormContext from "../store/form-context";
import { useContext } from "react";

const LANGUAGE_DATA = [
  { name: "Javascript" },
  { name: "Java" },
  { name: "Python" },
  { name: "C++" },
  { name: "Ruby" },
  { name: "PHP" },
];

const MyForm = () => {
  const formCtx = useContext(FormContext);

  return (
    <Form>
      {formCtx.isError && (
        <h6 className='text-danger text-center'>
          You must fill all the required data !
        </h6>
      )}
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type='name'
          placeholder='Enter Your Name'
          onChange={formCtx.nameHandler}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Favorite Language</Form.Label>
        <Form.Control as='select' onChange={formCtx.languageHandler}>
          <option defaultValue='' value='' hidden>
            Select Your Language
          </option>
          {LANGUAGE_DATA.map((lang, idx) => (
            <option key={lang.name} value={lang.name}>
              {lang.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default MyForm;
