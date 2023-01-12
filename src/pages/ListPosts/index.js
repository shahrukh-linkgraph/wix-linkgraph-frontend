import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { listPostsRequest } from "./redux/actions";

function ListPosts(props) {
  const { GetPostListData, listPostsRequest } = props;

  // console.log("GetPostListData>>>>>>", GetPostListData?.listPosts?.data?.posts);
  const GetPostListCategoryData = (event) => {
    event.preventDefault();
    listPostsRequest();
  };

  return (
    <Container className="pt-4 pb-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> WIX Posts</h1>
          <Button
            variant="primary"
            type="submit"
            onClick={GetPostListCategoryData}
          >
            GET Posts
          </Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label></Form.Label>
          <Form.Control
            type="textarea"
            as={"textarea"}
            name="PostData"
            defaultValue={JSON.stringify(
              GetPostListData?.listPosts?.data?.posts,
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
  GetPostListData: state.ListPosts,
});

const mapDispatchToProps = (dispatch) => ({
  listPostsRequest: (data) => dispatch(listPostsRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
