import { Table } from "react-bootstrap";

const MyTable = (props) => {
  return (
    <Table className='table w-50 table-bordered text-center'>
      <thead className='tabetable-dark'>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha Nac.</th>

        </tr>
      </thead>
      <tbody>
        {props.data.map((d, i) => {
          return (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{d.name}</td>
              <td>{d.lastName}</td>
              <td>{d.email}</td>

            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MyTable;
