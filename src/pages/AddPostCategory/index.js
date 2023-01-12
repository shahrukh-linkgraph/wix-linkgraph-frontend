import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPostCategoryRequest } from "./redux/actions";

const AddPostCategories = (props) => {
  const {
    addPostCategoryRequest,
    allPosts,
    PostData,
    GetPostListData,
    getPostCategory,
  } = props;

  console.log("PostData=========================>", PostData?.postCategory?.data?.draftPost);

  const [title, setTitle] = useState("");
  const [memberId, setMemberId] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [fieldsets, setFieldsets] = useState("");

  const AddCategoryDetail = (event) => {
    const data = {
      draftPost: {
        title:title,
        memberId:memberId
      },
      excerpt: excerpt,
      fieldsets: [URL]
    };
    event.preventDefault();
    addPostCategoryRequest(data);
  };

  const GetPostListCategoryData = () => {
    getPostCategory();
  };

  return (
    <div>
      
      <Form style={{ marginLeft: 160, marginRight: 160 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Posts</h1>
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
          Add Categories
        </Button>
      </Form>
      <p style={{ marginLeft: 160, marginRight:160, marginTop:20 }}>
        <textarea
          className="form-control"
          rows="6"
          aria-label="With textarea"
          value={JSON.stringify(PostData?.postCategory?.data?.draftPost, undefined, 4)}
        />
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  PostData: state.addPostcategoryReducer
});

const mapDispatchToProps = (dispatch) => ({
  addPostCategoryRequest: (data) => dispatch(addPostCategoryRequest(data)),
  // getPostCategory: (data) => dispatch(getPostCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostCategories);
