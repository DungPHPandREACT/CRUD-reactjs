import React, { useState, useEffect } from 'react';
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  onAddStudent,
} from 'reactstrap';

const ModalStudent = ({ onAddStudent, onUpdateStudent, dataUpdate }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [math, setMath] = useState('');
  const [english, setEnglish] = useState('');
  const [history, setHistory] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleChangeMath = (event) => {
    setMath(event.target.value);
  };

  const handleChangeEnglish = (event) => {
    setEnglish(event.target.value);
  };

  const handleChangeHistory = (event) => {
    setHistory(event.target.value);
  };

  const handleAddStudent = () => {
    const student = {
      id,
      name,
      age,
      math,
      english,
      history,
    };
    onAddStudent(student);
  };

  const handleUpdateStudent = () => {
    const student = {
      id,
      name,
      age,
      math,
      english,
      history,
    };
    onUpdateStudent(student);
  };

  useEffect(() => {
    if (dataUpdate) {
      console.log('dataUpdate có dữ liệu');
      setId(dataUpdate.id);
      setAge(dataUpdate.age);
      setName(dataUpdate.name);
      setMath(dataUpdate.math);
      setHistory(dataUpdate.history);
      setEnglish(dataUpdate.english);
      setIsUpdate(true);
    } else {
      console.log('dataUpdate chưa có dữ liệu');
    }
  }, [dataUpdate]);

  return (
    <Form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label>ID</Label>
            <Input
              id="id"
              name="id"
              value={id}
              placeholder="Enter your id"
              type="number"
              onChange={handleChangeId}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="string"
              value={name}
              onChange={handleChangeName}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>Age</Label>
            <Input
              id="age"
              name="age"
              placeholder="Enter your age"
              type="number"
              value={age}
              onChange={handleChangeAge}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label>Math</Label>
            <Input
              id="math"
              name="math"
              placeholder="Enter your math"
              type="number"
              value={math}
              onChange={handleChangeMath}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>English</Label>
            <Input
              id="english"
              name="english"
              placeholder="Enter your english"
              type="number"
              value={english}
              onChange={handleChangeEnglish}
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label>History</Label>
            <Input
              id="history"
              name="history"
              placeholder="Enter your history"
              type="number"
              value={history}
              onChange={handleChangeHistory}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={3}>
          {isUpdate ? (
            <Button
              style={{ marginRight: '5px' }}
              onClick={handleUpdateStudent}
            >
              Update student
            </Button>
          ) : (
            <Button style={{ marginRight: '5px' }} onClick={handleAddStudent}>
              Add new student
            </Button>
          )}

          <Button color="danger">Cancel</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ModalStudent;
