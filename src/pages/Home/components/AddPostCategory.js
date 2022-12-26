import React, { useState, useEffect } from "react";
import axios from "axios";
// import axios from "axios";
import { connect } from "react-redux";
// import { getCategoryRequest } from "../redux/actions";
import { Table } from "react-bootstrap";
import { getUsers } from "../redux/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Glyphicon } from 'react-bootstrap'
import {Button} from "react-bootstrap";
function AddPostCategory(props) {
  const { UserData, getUsers } = props;

  console.log("UserData......", UserData);
  console.log("UserData......>>>>>>>>>>>>>>>>>>", UserData.data);


  const getDataFromApi = () => {
    getUsers();
  };
  const DeleteStudent = async (id) => {
    // await deletestudent(id)
    // getallstudent();
  }
 
  // const addPostCategory = () => {
  //     axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
  //         // console.log('post_category', data.data)
  //         setPostCategory(JSON.stringify(data.data, undefined, 4))
  //     });
  // }
  // console.log("postCategorypostCategory", postCategory);

  return (
    <div>
      <div className="bg-light rounded">
        <div className="col-sm-10 py-2 mx-auto">
          <h3 className="display-8 fw-normal">WIX Category (Post Payload)</h3>
          <p style={{display:"flex",justifyContent:"space-between"}}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={getDataFromApi}
              // onClick={() => getData()}
            >
              POST Category
            </button>
           <Link to={`/Add/}`}><button
              type="button"
              className="btn btn-primary"
              // onClick={}
              // onClick={() => getData()}
            >
              Add Category
            </button></Link> 
          </p>
          <p>
          <div>
    <h1>Student Data</h1>
    <Table striped hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Class</th>
      <th>Edit</th>
      <th>Delete</th>

    </tr>
  </thead>
  <tbody>
  {
   UserData.data && UserData.data.map((item, index) =>{
    console.log("item item",item);
      return(
        
    <tr>
    <td>{item.id}</td>
    <td>{item.username}</td>
    <td>{item.name}</td>
    <td>{item.phone}</td>
   <td><Link to={`/edit/${UserData.id}`}><Button variant="orange" >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="orange" class="bi bi-pencil-square" viewBox="0 0 20 20" >
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
    </Button></Link> </td>
    <td><Button variant="red">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
    </Button></td>

    {/* <td><Link className='btn btn-primary' to={`/edit/${UserData.id}`}>Edit</Link></td>
    <td><Button onClick={() => DeleteStudent(UserData.id)}>Delete</Button></td> */}
  </tr>

      )
    })
  }
    </tbody>
    </Table>
    </div>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  UserData: state.users.allUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (data) => dispatch(getUsers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostCategory);
