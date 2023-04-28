import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Button,
  Form,
  Alert,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { userAutoLoginRequest } from "./redux/actions";
import { APP_ID, APP_URL } from "../../config/app";

function Home(props) {
  const navigate = useNavigate();

  const { userAutoLoginData, userAutoLoginRequest } = props;

  console.log("userAutoLoginData", userAutoLoginData);

  if (userAutoLoginData?.data?.jwt_token) {
    navigate("/dashboard");
  }

  const [isInitialRender, setIsInitialRender] = useState(true);

  // const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("Please wait");
  const [token, setToken] = useState("");

  const [installationUrl, setInstallationUrl] = useState("");

  useEffect(() => {
    if (isInitialRender) {
      showMessages();
      const timer = setTimeout(() => {
        AddMemberDetail();
        setIsInitialRender(false);
      }, 6000);

      return () => {
        clearTimeout(timer);
      };
    }

    // eslint-disable-next-line
  }, [isInitialRender]);

  const showMessages = () => {
    const url = window.location.href;
    const params = new URLSearchParams(url.split("?")[1]);

    if (params.get("code")) {
      setMessage("Please wait. Your Wix app is installing.");
    }

    if (params.get("token")) {
      setMessage("Please wait. Your Wix app is creating the installation URL.");
    }
  };

  const AddMemberDetail = () => {
    // const url =
    // "https://eb22-39-53-95-27.in.ngrok.io/?code=OAUTH2.eyJraWQiOiJWUTQwMVRlWiIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiYXBwSWRcIjpcImRlYTg3OGQ1LWRjZGYtNDU3OC1hYzczLTkzNTZjMjRkZGVhM1wiLFwiaW5zdGFuY2VJZFwiOlwiMmEwNzEwMjctNzI3NS00MDJkLTk0YTYtYTZmMWMxM2FlYTI3XCIsXCJzY29wZVwiOltcIlNDT1BFLkRDLVNUT1JFUy1NRUdBLk1BTkFHRS1TVE9SRVNcIixcIlNDT1BFLkRDLVNJVEVQUk9QLk1BTkFHRS1CVVNJTkVTUy1QUk9GSUxFXCIsXCJTQ09QRS5EQy1QQVlNRU5UUy5NQU5BR0UtUkVGVU5EU1wiLFwiU0NPUEUuREMtUEFZTUVOVFMuTUFOQUdFLVBBWU1FTlRTXCIsXCJTQ09QRS5EQy1TSVRFUFJPUC5NQU5BR0UtQlVTSU5FU1MtQ09OVEFDVFwiLFwiU0NPUEUuREMtQkxPRy5SRUFELUJMT0dTXCIsXCJTQ09QRS5EQy5NQU5BR0UtWU9VUi1BUFBcIixcIlNDT1BFLkRDLVNJVEVQUk9QLk1BTkFHRS1CVVNJTkVTUy1TQ0hFRFVMRVwiLFwiU0NPUEUuREMtQ1VSUkVOQ1ktQ09OVkVSVEVSLk1BTkFHRS1DVVJSRU5DSUVTXCIsXCJTQ09QRS5EQy1TSVRFUFJPUC5NQU5BR0UtUFJPUEVSVElFU1wiLFwiU0NPUEUuREMtU1RPUkVTLk1BTkFHRS1QUk9EVUNUU1wiLFwiU0NPUEUuREMtQkxPRy5NQU5BR0UtQkxPR1wiLFwiU0NPUEUuREMtU1RPUkVTLlJFQUQtT1JERVJTXCIsXCJTQ09QRS5EQy1TVE9SRVMtTUVHQS5SRUFELVNUT1JFU1wiLFwiU0NPUEUuREMtUEFZTUVOVFMuTUFOQUdFLVRSQU5TQUNUSU9OU1wiLFwiU0NPUEUuREMtUEFZTUVOVFMuTUFOQUdFLURJU1BVVEVTXCIsXCJTQ09QRS5EQy1TVE9SRVMuUkVBRC1QUk9EVUNUU1wiLFwiU0NPUEUuREMtTVVMVElMT0NBVElPTi5NQU5BR0UtTE9DQVRJT05TXCIsXCJTQ09QRS5EQy1CTE9HLlJFQUQtRFJBRlQtUE9TVFNcIixcIlNDT1BFLkRDLVNUT1JFUy5NQU5BR0UtT1JERVJTXCIsXCJTQ09QRS5EQy1NVUxUSUxPQ0FUSU9OLlJFQUQtTE9DQVRJT05TXCJdfSIsImlhdCI6MTY3OTk1MjAyNSwiZXhwIjoxNjc5OTUyNjI1fQ.j8wv15zz5CQm-XlZUebg7Stu5hum2bDGiAucw9hASUU&state=&instanceId=2a071027-7275-402d-94a6-a6f1c13aea27";

    // const url =
    // "https://wix.com/installer/install/?token=227c05b241e1999d79ba3a77776bf3eba2ca923b8b8d8cb23ff439b22f009774b6101f83d3a177c908b7a6fbe30b4fffddf51e03da393c1855db56b1b3de479d7fd697ad421042330811ac190b64d8f2c4ef5b82133f32faa4b80e2835691011a59a890e0077fdea49e5f699732d208a09069441a916039d214d407eae0b0fa30fd7c6c26579dc09d471393337d6f649af79c8a3bbf845090a38e3e833f9fec346f0bb5283278d3ea8c4a0b7d33213bc4cc8c9a8ef60aaf20adb2e457199497b09632e1c05106e09de9bc533af9ca966&appId=dea878d5-dcdf-4578-ac73-9356c24ddea3&redirectUrl=https://linkgraph-wix-frontend-production.up.railway.app/";

    const url = window.location.href;

    const params = new URLSearchParams(url.split("?")[1]);

    if (params.get("code")) {
      const data = {
        token: params.get("code"),
      };

      // console.log("payload_data", data);
      // return true;

      userAutoLoginRequest(data);

      console.log("jwt_token", userAutoLoginData);
      if (userAutoLoginData?.data?.jwt_token) {
        navigate("/dashboard");
      }
    }

    if (params.get("token")) {
      setToken(params.get("token"));
      const installUrl = `${
        "https://wix.com/installer/install/?token=" +
        params.get("token") +
        "&appId=" +
        APP_ID +
        "&redirectUrl=" +
        APP_URL
      }`;

      setInstallationUrl(installUrl);
    }
  };

  const installAppWithUrl = (event) => {
    event.preventDefault();

    if (token) {
      window.open(installationUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="pb-5"> Welcome to SearchAtlas Wix App </h2>
          {isInitialRender && (
            <>
              <h4>{message} </h4>
              <Spinner animation="border" variant="dark" size="md" />
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {userAutoLoginData?.data?.message && (
            <Alert variant="danger">{userAutoLoginData?.data?.message}</Alert>
          )}
          {!isInitialRender && (
            <Form>
              {/* <h4>{count > 1 ? count : ""}</h4> */}
              <Form.Group className="mb-3">
                <Form.Label>Your WIX App installation URL</Form.Label>
                <Form.Control
                  type="text"
                  // as={"textarea"}
                  name="ID"
                  readOnly={true}
                  // onChange={(e) => setId(e.target.value)}
                  value={installationUrl}
                />
                <Form.Text className="text-muted">
                  Your WIX app URL will be create automatically.
                </Form.Text>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                onClick={installAppWithUrl}
              >
                Install
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  userAutoLoginData: state.userAutoLoginReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  userAutoLoginRequest: (data) => dispatch(userAutoLoginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
