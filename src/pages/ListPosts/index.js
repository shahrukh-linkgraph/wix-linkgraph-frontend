import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { listPostsRequest } from "./redux/actions";
import { Link } from "react-router-dom";

function ListPosts(props) {
  const { GetPostListData, listPostsRequest } = props;

  console.log("GetPostListData>>>>>>", GetPostListData);
  const GetPostListCategoryData = () => {
    listPostsRequest();
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
          </p>
          <p>
            <textarea
              className="form-control"
              rows="6"
              aria-label="With textarea"
              value={JSON.stringify(GetPostListData, undefined, 4)}
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
  listPostsRequest: (data) => dispatch(listPostsRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
