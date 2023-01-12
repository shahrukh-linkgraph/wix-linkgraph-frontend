import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { listCategoriesRequest } from "./redux/actions";

function ListCategory(props) {
  const { UserData, listCategoriesRequest } = props;

  // console.log("UserData>>>>>>>>>>>>>>>>>>>>>>", UserData);

  const getDataFromApi = (event) => {
    event.preventDefault();
    listCategoriesRequest();
  };

  return (
    <Container className="pt-4 pb-5">
      <Form>
        <Form.Group className="mb-3">
          <h1> WIX Categories</h1>
          <Button variant="primary" type="submit" onClick={getDataFromApi}>
            GET Categories
          </Button>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            as={"textarea"}
            name="PostData"
            defaultValue={JSON.stringify(
              UserData?.categories?.data?.categories,
              undefined,
              4
            )}
            style={{ height: "200px" }}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  UserData: state.listCategoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  listCategoriesRequest: (data) => dispatch(listCategoriesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);
