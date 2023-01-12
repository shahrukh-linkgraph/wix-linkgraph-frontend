import React, { useState } from "react";
import { Container, Button, Form, Alert, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { userRegistrationRequest } from "./redux/actions";

const AddMember = (props) => {
  const { AddRegistration, userRegistrationRequest } = props;
  // console.log("user-registration", AddRegistration);

  const [id, setId] = useState("");
  const [validation, setValidation] = useState("");

  const AddMemberDetail = (event) => {
    event.preventDefault();

    if (id === "") {
      setValidation("Please enter your WIX Account ID");
      return false;
    }

    setValidation("");

    const data = {
      id: id,
    };

    userRegistrationRequest(data);
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {(AddRegistration?.data?.error ||
            AddRegistration?.data?.message ||
            validation) && (
            <Alert variant={"danger"}>
              {AddRegistration?.data?.error ||
                AddRegistration?.data?.message ||
                validation}
            </Alert>
          )}
          <Form>
            <Form.Group className="mb-3">
              <h2 className="pb-5"> Registration </h2>
              <Form.Label>Enter Your WIX Account ID</Form.Label>
              <Form.Control
                type="text"
                name="ID"
                onChange={(e) => setId(e.target.value)}
                value={id}
              />
              <Form.Text className="text-muted">
                Get your WIX Account ID from your Account Settings and goto API
                Keys of WIX account.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={AddMemberDetail}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  AddRegistration: state.addRegisterReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  userRegistrationRequest: (data) => dispatch(userRegistrationRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
