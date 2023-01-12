import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addCategoryRequest } from "./redux/actions";

const AddCategory = (props) => {
  const { PostCreateListData, addCategoryRequest } = props;

  // console.log("PostCreateListData =======================>", PostCreateListData?.category?.data?.category);
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
        slug: slug,
      },
      fieldsets: [fieldsets],
    };

    event.preventDefault();
    addCategoryRequest(data);
  };

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Category</h1>
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
            onChange={(e) => setDisplayPosition(parseInt(e.target.value))}
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

        <Button
          variant="primary"
          type="submit"
          onClick={AddPostsCategoryDetail}
        >
          Add Category
        </Button>

        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            as={"textarea"}
            name="CategoryData"
            value={JSON.stringify(
              PostCreateListData?.category?.data?.category,
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
  PostCreateListData: state.AddCategorYReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addCategoryRequest: (data) => dispatch(addCategoryRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
