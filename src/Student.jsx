import { Button } from 'reactstrap';
import React from 'react';

const Student = ({
  id,
  name,
  age,
  math,
  english,
  history,
  mediumScore,
  onDelete,
  onUpdate,
}) => {
  const handleGetId = () => {
    onDelete(id);
  };
  const handleUpdateData = () => {
    onUpdate(id);
  };

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{age}</td>
      <td>{math}</td>
      <td>{english}</td>
      <td>{history}</td>
      <td>{mediumScore}</td>
      <td>
        <Button
          style={{ marginRight: '5px' }}
          color="success"
          onClick={handleUpdateData}
        >
          Update
        </Button>
        <Button color="danger" onClick={handleGetId}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Student;
