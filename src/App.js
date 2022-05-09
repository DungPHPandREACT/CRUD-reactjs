import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'reactstrap';
import ModalStudent from './ModalStudent';
import Student from './Student';

const App = () => {
  const [listStudents, setListStudents] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      age: '15',
      math: 8,
      english: 8,
      history: 8,
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      age: '15',
      math: 7,
      english: 7,
      history: 7,
    },
  ]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [dataStudentUpdate, setDataStudentUpdate] = useState(null);

  const handleToggleShowForm = () => {
    setIsShowForm(!isShowForm);
  };

  const handleSubmitStudent = (student) => {
    setListStudents([...listStudents, student]);
  };

  const handleDeleteStudent = (id) => {
    const newListStudents = listStudents.filter((student) => student.id !== id);
    setListStudents(newListStudents);
  };

  const handleGetDataUpdateStudent = (id) => {
    const dataUpdate = listStudents.find((student) => student.id === id);
    setDataStudentUpdate(dataUpdate);
    setIsShowForm(true);
  };

  const findIndexStudent = (student) => {
    for (let i = 0; i < listStudents.length; i++) {
      if (listStudents[i].id === student.id) {
        return i;
      }
    }
    return false;
  };

  const handleUpdateStudent = (student) => {
    const index = findIndexStudent(student);
    let temp = listStudents;
    temp.splice(index, 1, student);
    setListStudents(temp);
    setIsShowForm(false);
    setDataStudentUpdate(null);
    // console.log(temp);
  };

  console.log(listStudents);

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="3">
          <Button onClick={handleToggleShowForm}> Add student</Button>
        </Col>
      </Row>

      <Row>
        {isShowForm ? (
          <ModalStudent
            onAddStudent={handleSubmitStudent}
            onUpdateStudent={handleUpdateStudent}
            dataUpdate={dataStudentUpdate}
          />
        ) : (
          ''
        )}
      </Row>
      {/* dieukien ? A : B */}
      {/* dieukien là true thì sẽ hiển thị A, còn điều kiện là false thì sẽ hiển thị ra B*/}
      {/* dieukien ?? A */}
      {/* dieukien là true thì sẽ hiển thị A, còn điều kiện là false thì sẽ không hiển thị gì */}

      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Math</th>
            <th>English</th>
            <th>History</th>
            <th>Medium Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listStudents.map((e, i) => {
            return (
              <Student
                key={i}
                id={e.id}
                name={e.name}
                age={e.age}
                math={e.math}
                english={e.english}
                history={e.history}
                mediumScore={(e.math + e.english + e.history) / 3}
                onDelete={handleDeleteStudent}
                onUpdate={handleGetDataUpdateStudent}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
