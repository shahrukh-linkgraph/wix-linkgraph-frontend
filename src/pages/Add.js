import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
//import React,{ useState } from 'react'
// import {addstudent} from '../../services/Api'
const initialValue = 
{
  studentname: '',
  studentclass: '',
  studentrollNo: '', 
  studentcity: '',
  id: ''
}
const Add = () => {
  const [student, setStudent] = useState(initialValue)
  const { studentname, studentclass, studentrollNo, studentcity, id } = student
  const location = useLocation()
  const ChangeValue = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value })
  }
  const AddStudentDetail = (event) => {
    event.preventDefault();
//    addstudent(student)    
location.push('/get')
  }
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Student</h1>
          <Form.Label>Student Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name..." name="studentname" onChange={(e) => ChangeValue(e)} value={studentname} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicClass">
          <Form.Label>Student Class</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Class..." name="studentclass" onChange={(e) => ChangeValue(e)} value={studentclass} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Student RollNo</Form.Label>
          <Form.Control type="Number" placeholder="Enter Your RollNo..." name="studentrollNo" onChange={(e) => ChangeValue(e)} value={studentrollNo}  />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Student City</Form.Label>
          <Form.Control type="text" placeholder="Enter Your City..." name="studentcity" onChange={(e) => ChangeValue(e)} value={studentcity}  />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={AddStudentDetail}>
          Add Student
        </Button>
      </Form>
    </div>
  )
}
export default Add