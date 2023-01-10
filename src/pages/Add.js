import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getCategory } from "./PostsCategoriesPost/redux/actions";
import { getPostCategory } from "./PostCategories/redux/actions";

const Add = (props) => {
  const { getCategory,  PostData, GetPostListData, getPostCategory } = props;
  // console.log("PostData=>", PostData);
  // console.log("GetPostListData ===================>", GetPostListData)
  const [pagging, setPagging] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const AddCategoryDetail = (event) => {
    const data = {
      paging: {
        limit: pagging,
      },
      filter: {
        title: filter,
      },
      sort: [sort],
    }
    event.preventDefault();
    getCategory(data)
  };

  const GetPostListCategoryData = () => {
    getPostCategory()
  }

  return (
    <div>
      <h3 className="display-8 fw-normal" style={{ marginLeft: 80, marginRight: 80 }}>WIX Category</h3>
      <p style={{ marginLeft: 80, marginRight: 80 }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={GetPostListCategoryData}
        >
          Get List Category
        </button>
      </p>
      <p style={{ marginLeft: 80, marginRight: 80 }}>
        <textarea
          className="form-control"
          rows="6"
          aria-label="With textarea"
          value={JSON.stringify(JSON.stringify(GetPostListData?.data?.posts))}
        />
      </p>
      <Form style={{ marginLeft: 80, marginRight: 80 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Categories</h1>
          <Form.Label>Paging</Form.Label>
          <Form.Control
            type="text"
            placeholder="Paging"
            name="Paging"
            onChange={(e) => setPagging(e.target.value)}
            value={pagging}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicClass">
          <Form.Label>Filter</Form.Label>
          <Form.Control
            type="text"
            placeholder="Filter"
            name="Filter"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Sort</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sort"
            name="Sort"
            onChange={(e) => setSort(e.target.value)}
            value={sort}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={AddCategoryDetail}>
          Add Categories
        </Button>
      </Form>
      <p style={{ margin: 70 }}>
        <textarea
          className="form-control"
          rows="6"
          aria-label="With textarea"
          value={JSON.stringify(PostData?.data?.categories)}
        />
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  PostData: state.postscategoriesReducer.allPosts,
  GetPostListData: state.postslistcategory.allCategoryList,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: (data) => dispatch(getCategory(data)),
  getPostCategory: (data) => dispatch(getPostCategory(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Add);