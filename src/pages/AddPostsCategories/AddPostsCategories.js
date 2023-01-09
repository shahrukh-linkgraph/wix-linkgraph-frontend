import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
// import { PostCategory } from "./Home/components/Categories/redux/actions";
import { PostCategory } from "./redux/actions";
import { Link } from "react-router-dom";
// import { getUsers } from "./Home/components/Categories/redux/actions";
// import { getUsers } from "../AddCategories/redux/actions";

const AddPostCategories = (props) => {
  const { PostCreateListData, PostCategory, categoryData, UserData, getUsers } = props;

  console.log("PostCreateListData =>", categoryData);
  const [category, setCategory] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [displayPosition, setDisplayPosition] = useState("");
  const [language, setLanguage] = useState("");
  const [slug, setSlug] = useState("");
  const [fieldsets, setFieldsets] = useState("");


  const AddPostsCategoryDetail = (event) => {
    const data = {
      category: {
        label: label,
        description: description,
        title: title,
        displayPosition: displayPosition,
        language: language,
        slug: slug
      },
      fieldsets: [fieldsets]
    }

    event.preventDefault();
    PostCategory(data)
  };
  const getDataFromApi = () => {
    getUsers();
  };

  return (
    <div>

      <h3 className="display-8 fw-normal" style={{ marginLeft: 80, marginRight: 80 }}>WIX Category (Post Payload)</h3>
      <p style={{ marginLeft: 80, marginRight: 80 }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={getDataFromApi}
        >
          Get List Category
        </button>

      </p>
      <p style={{ marginLeft: 80, marginRight: 80 }}>
        <textarea
          className="form-control"
          rows="6"
          aria-label="With textarea"
          value={JSON.stringify(UserData?.data?.categories)}
        />
      </p>

      <Form style={{ marginLeft: 80, marginRight: 80 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Posts Categories</h1>
          <Form.Label>Label</Form.Label>
          <Form.Control
            type="text"
            placeholder="Label"
            name="Label"
            onChange={(e) => setLabel(e.target.value)}
            value={label}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicClass">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRollNo">
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
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>DisplayPosition</Form.Label>
          <Form.Control
            type="text"
            placeholder="DisplayPosition"
            name="DisplayPosition"
            onChange={(e) => setDisplayPosition(e.target.value)}
            value={displayPosition}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Language</Form.Label>
          <Form.Control
            type="text"
            placeholder="Language"
            name="Language"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Slug</Form.Label>
          <Form.Control
            type="text"
            placeholder="Slug"
            name="Slug"
            onChange={(e) => setSlug(e.target.value)}
            value={slug}
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

        {/* <Button variant="primary" type="submit" onClick={AddPostsCategoryDetail}>
          Add Posts Categories
        </Button> */}
      </Form>
      {/* <p style={{ margin: 70 }}>
        <textarea
          className="form-control"
          rows="6"
          aria-label="With textarea"
          value={JSON.stringify(categoryData?.data?.categories)}
        />
      </p> */}
    </div>
  );
};
const mapStateToProps = (state) => ({
  PostCreateListData: state.users.PostCreateListData,
//   UserData: state.users.allUser,
});

const mapDispatchToProps = (dispatch) => ({
  PostCategory: (data) => dispatch(PostCategory(data)),
//   getUsers: (data) => dispatch(getUsers(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostCategories);

