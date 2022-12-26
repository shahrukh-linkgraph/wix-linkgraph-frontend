import React, { useState } from "react"
import { getCategory } from "../redux/actions";
import { connect } from "react-redux";
import axios from "axios";

function Categories(props) {
const {PostData, getCategory} = props
    const [category, setCategory] = useState();


    console.log("PostData......", PostData)

    const postDataFromApi = () => {
        const data = {
            "paging":4,
            "limit": 2
        }
        getCategory(data);
      }
    const getCategories = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
            // console.log('categories', data.data)
            setCategory(JSON.stringify(data.data, undefined, 4))
        });
    }

    return (
        <div>
            <div className="bg-light rounded">

                <div className="col-sm-10 py-5 mx-auto">
                    <h3 className="display-8 fw-normal">WIX Categories</h3>
                    <p>
                        <button type="button" className="btn btn-primary" onClick={postDataFromApi}>GET Categories</button>
                    </p>
                    <p>
                        <textarea className="form-control" rows="6" aria-label="With textarea" value={PostData} />
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    PostData: state.users.allposts,
    // requesting: state.homeReducer.r2equesting,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getCategory: (data) => dispatch(getCategory(data)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);
  
  