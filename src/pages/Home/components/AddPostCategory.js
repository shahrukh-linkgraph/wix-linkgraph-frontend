import React, { useState } from "react"
import axios from "axios"

function AddPostCategory() {

    const [postCategory, setPostCategory] = useState();

    const addPostCategory = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
            // console.log('post_category', data.data)
            setPostCategory(JSON.stringify(data.data, undefined, 4))
        });
    }

    return (
        <div>
            <div className="bg-light rounded">

                <div className="col-sm-10 py-2 mx-auto">
                    <h3 className="display-8 fw-normal">WIX Category (Post Payload)</h3>
                    <p>
                        <button type="button" className="btn btn-primary" onClick={addPostCategory}>POST Category</button>
                    </p>
                    <p>
                        <textarea className="form-control" rows="6" aria-label="With textarea" value={postCategory} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AddPostCategory