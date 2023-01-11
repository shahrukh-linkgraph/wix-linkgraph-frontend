import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import { connect } from "react-redux";
import { addRegisterRequest } from "./redux/actions";
const AddMember = (props) => {
  const { AddRegistration, addRegisterRequest } = props;
  // console.log("AddRegistration=========>", AddRegistration?.addMember?.data?.message);

  const [id, setId] = useState("");

  const AddMemberDetail = (event) => {
    const data = {
      id: id,
    };
    // console.log("payload..............", data);
    event.preventDefault();
    addRegisterRequest(data);
  };

  return (
    <div className="App">
      <div style={{ margin: 40 }}>
        {(AddRegistration?.addMember?.data?.detail || AddRegistration?.addMember?.data?.message) && (
          <Alert variant={"danger"}>
            {(AddRegistration?.addMember?.data?.detail || AddRegistration?.addMember?.data?.message)}
          </Alert>
        )}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicRollNo">
            <Form.Label>Enter Your WIX Account ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Id"
              name="ID"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
            <Form.Text className="text-muted">Get your WIX Account ID from your Account Settings and goto API Keys of WIX account.</Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={AddMemberDetail}>
            Submit
          </Button>
        </Form>
        {/* <Categories />
      <Posts />
      <AddPostCategory /> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  AddRegistration: state.addRegisterReducer,
  //   UserData: state.users.allUser,
});

const mapDispatchToProps = (dispatch) => ({
  addRegisterRequest: (data) => dispatch(addRegisterRequest(data)),
  //   getUsers: (data) => dispatch(getUsers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
