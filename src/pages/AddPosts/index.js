import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPostCategoryRequest } from "./redux/actions";

const AddPosts = (props) => {
  const { addPostCategoryRequest, PostData } = props;

  // console.log("PostData========", PostData?.postCategory?.data?.draftPost);

  const [title, setTitle] = useState("");
  const [memberId, setMemberId] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [fieldsets, setFieldsets] = useState("");

  const AddCategoryDetail = (event) => {
    const data = {
      draftPost: {
        title: title,
        memberId: memberId,
      },
      excerpt: excerpt,
      fieldsets: [URL],
    };
    event.preventDefault();
    addPostCategoryRequest(data);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Post</h1>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicClass">
          <Form.Label>MemberId</Form.Label>
          <Form.Control
            type="text"
            placeholder="MemberId"
            name="MemberId"
            onChange={(e) => setMemberId(e.target.value)}
            value={memberId}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Excerpt</Form.Label>
          <Form.Control
            type="text"
            placeholder="Excerpt"
            name="Excerpt"
            onChange={(e) => setExcerpt(e.target.value)}
            value={excerpt}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Fieldsets</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fieldsets"
            name="Fieldsets"
            onChange={(e) => setFieldsets(e.target.value)}
            value={fieldsets}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={AddCategoryDetail}>
          Add Post
        </Button>
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            as={"textarea"}
            name="PostData"
            value={JSON.stringify(
              PostData?.postCategory?.data?.draftPost,
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
};
const mapStateToProps = (state) => ({
  PostData: state.addPostcategoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addPostCategoryRequest: (data) => dispatch(addPostCategoryRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPosts);
