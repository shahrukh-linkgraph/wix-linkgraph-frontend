import React, { useState, useEffect } from "react";
// import axios from "axios";
import { connect } from "react-redux";
// import { getCategoryRequest } from "../redux/actions";

import { getUsers } from "../redux/actions";

function AddPostCategory(props) {
  // const [data,setData]=useState(false)

  // const apiData=()=>{
  //   setData(users)
  // }

    const {UserData, getUsers} = props

    console.log("UserData......", UserData)

    const getDataFromApi = () => {
      getUsers();
    }

  // const [postCategory, setPostCategory] = useState();
  useEffect(() => {
    
  }, []);
  const GetUserData = ()=>{

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
          <p>
            <button type="button" className="btn btn-primary" onClick={getDataFromApi}>
              POST Category
            </button>
          </p>
          <p>
            <textarea
              className="form-control"
              rows="6"
              aria-label="With textarea"
              value={UserData.map((item) => (item.name))}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  UserData: state.users.allUser,
  // requesting: state.homeReducer.r2equesting,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (data) => dispatch(getUsers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostCategory);
