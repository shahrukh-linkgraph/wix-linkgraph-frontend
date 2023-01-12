import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { listCategoriesRequest } from "./redux/actions";

function ListCategory(props) {
  const { UserData, listCategoriesRequest } = props;

  // console.log("list-categories", UserData?.data?.categories);

  const getDataFromApi = () => {
    listCategoriesRequest();
  };

  return (
    <Container>
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
    </Container>
  );
}

const mapStateToProps = (state) => ({
  UserData: state.listCategoryReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  listCategoriesRequest: (data) => dispatch(listCategoriesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);