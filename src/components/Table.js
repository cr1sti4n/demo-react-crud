import { Table } from "react-bootstrap";

const MyTable = (props) => {
  return (
    <Table className='w-50 table-bordered text-center'>
      <thead className='table-dark'>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((d, i) => {
          return (
            <tr key={i + 1}>
              <td>{i + 1}</td>
              <td>{d.name}</td>
              <td>{d.language}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MyTable;
