import React, { useState } from "react"
import axios from "axios"

function Categories() {

    const [category, setCategory] = useState();

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
                        <button type="button" className="btn btn-primary" onClick={getCategories}>GET Categories</button>
                    </p>
                    <p>
                        <textarea className="form-control" rows="6" aria-label="With textarea" value={category} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Categories