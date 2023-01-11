import React from "react";

import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { getUsers } from "./redux/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { listCategoriesRequest } from "../../../ListCategory/redux/actions";
function AddPostCategory(props) {
  const { UserData, listCategoriesRequest } = props;

  console.log("UserData......", UserData);
  // console.log("UserData......>>>>>>>>>>>>>>>>>>", UserData?.data?.categories);

  const getDataFromApi = () => {
    listCategoriesRequest();
  };

  return (
    <div>
      <div className="bg-light rounded">
        <div className="col-sm-10 py-2 mx-auto">
          <h3 className="display-8 fw-normal">WIX Category</h3>
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={getDataFromApi}
            >
              Get List Category
            </button>
            <Link to={`/Add/`}>
              <button type="button" className="btn btn-primary">
                Add Category
              </button>
            </Link>
          </p>
          <p>
            <textarea
              className="form-control"
              rows="6"
              aria-label="With textarea"
              value={JSON.stringify(UserData?.data?.categories, undefined, 4)}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  UserData: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  listCategoriesRequest: (data) => dispatch(listCategoriesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPostCategory);
