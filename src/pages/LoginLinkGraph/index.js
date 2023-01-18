import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { PostLoginUserRequest } from "./redux/actions";

const LoginLinkGraph = (props) => {
  const { PostLoginUserRequest, postLoginUserData } = props;

  // console.log("user-login============>", postLoginUserData.loginUser.data);

  // const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const Login = (event) => {
    

    event.preventDefault();
    if (!username.length  ||  !password.length) {
      setValidation("Please enter These Fields");
    }else{
      setValidation("");
      const data = {
        username: username,
        password: password,
      };
      PostLoginUserRequest(data);
     
    }
   
  };
  
  return (
    <div>
      <Container className="pt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
          {(postLoginUserData?.loginUser?.data?.detail ||
            postLoginUserData?.loginUser?.data?.detail ||
            validation) && (
            <Alert variant={"danger"}>
              {postLoginUserData?.loginUser?.data?.detail ||
                postLoginUserData?.loginUser?.data?.detail ||
                validation}
            </Alert>
          )}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <h1> Login</h1>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="Email"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicClass">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={Login}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postLoginUserData: state.loginUserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  PostLoginUserRequest: (data) => dispatch(PostLoginUserRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginLinkGraph);
