import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getPostCategory } from "./redux/actions";
import { Link } from "react-router-dom";
function Posts(props) {
  const { GetPostListData, getPostCategory } = props;
  console.log("GetPostListData>>>>>>", GetPostListData);
  const GetPostListCategoryData = () => {
    getPostCategory();
  };

  return (
    <div>
      <div className="bg-light rounded">
        <div className="col-sm-10 py-2 mx-auto">
          <h3 className="display-8 fw-normal">WIX Posts</h3>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={GetPostListCategoryData}
            >
              GET Post List Data
            </button>

            <Link to={`/AddPosts/`}>
              <button type="button" className="btn btn-primary">
                Add Post Category
              </button>
            </Link>
          </p>
          <p>
            <textarea
              className="form-control"
              rows="6"
              aria-label="With textarea"
              value={JSON.stringify(GetPostListData)}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  GetPostListData: state.users.allCategoryList,
});

const mapDispatchToProps = (dispatch) => ({
  getPostCategory: (data) => dispatch(getPostCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
