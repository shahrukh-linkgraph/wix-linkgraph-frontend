import React, { useState } from "react";
import { getCategory } from "./redux/actions";
import { connect } from "react-redux";
function Categories(props) {
  const { PostData, getCategory } = props;
  console.log("PostData......>>>>>>", PostData);

  return (
    <div>
      <div className="bg-light rounded">
        <div className="col-sm-10 py-5 mx-auto">
          <h3 className="display-8 fw-normal">WIX Categories</h3>
          <p>
            <button
              type="button"
              className="btn btn-primary"
              // onClick={postDataFromApi}
            >
              POST Category
            </button>
          </p>
          <p>
            <textarea
              className="form-control"
              rows="6"
              aria-label="With textarea"
              //   value={PostData}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  PostData: state.Categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategory: (data) => dispatch(getCategory(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
