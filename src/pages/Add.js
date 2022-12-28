import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCategory } from "./Home/redux/actions";
//import React,{ useState } from 'react'
// import {addstudent} from '../../services/Api'
const initialValue = {
  paging: {
    limit: "",
  },
  filter: {
    title: "",
  },
  sort: [""],
};
const Add = (props) => {
  const { getCategory, allPosts } = props;
  console.log("allPosts =>", allPosts);
  const [pagging, setPagging] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const [Category, setCategory] = useState(initialValue);
  const { Paging, Filter, Sort, id } = Category;
  const location = useLocation();
console.log("CategoryCategory >>>>",Category);
  const ChangeValue = (e) => {
    setCategory({[e.target.name]: e.target.value });
  };
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
     getCategory(Category)
  };

  // const postDataFromApi = () => {
  //   const data = {
  //     paging: {
  //       limit: 4,
  //     },
  //     filter: {
  //       title: "summer",
  //     },
  //     sort: ["title"],
  //   };
  //   console.log("data =>", data);
  //   getCategory(data);
  // };
  // const getCategories = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
  //         // console.log('categories', data.data)
  //         setCategory(JSON.stringify(data.data, undefined, 4))
  //     });

  return (
    <div>
      <Form style={{ marginLeft: 80, marginRight: 80 }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <h1> Add Categories</h1>
          <Form.Label>Paging</Form.Label>
          <Form.Control
            type="text"
            placeholder="Paging"
            name="Paging"
            onChange={(e) => setPagging(e.target.value)}
            value={Paging}
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
            value={Filter}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRollNo">
          <Form.Label>Sort</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sort"
            name="Sort"
            onChange={(e) => setSort(e.target.value)}
            value={Sort}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Sort</Form.Label>
          <Form.Control type="text" placeholder="Sort" name="Sort" onChange={(e) => ChangeValue(e)} value={studentcity}  />
        </Form.Group> */}
        <Button variant="primary" type="submit" onClick={AddCategoryDetail}>
          Add Categories
        </Button>
      </Form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  PostData: state.users,
  // requesting: state.homeReducer.r2equesting,
  allPosts: state.users.allPosts,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: (data) => dispatch(getCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);

// export default Add;
