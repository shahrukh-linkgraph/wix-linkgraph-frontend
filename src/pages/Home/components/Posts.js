import React, { useState } from "react"
import axios from "axios"

function Posts() {

    const [posts, setPosts] = useState();

    const getPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
            // console.log('posts', data.data)
            setPosts(JSON.stringify(data.data, undefined, 4))
        });
    }

    return (

        <div>
            <div className="bg-light rounded">

                <div className="col-sm-10 py-2 mx-auto">
                    <h3 className="display-8 fw-normal">WIX Posts</h3>
                    <p>
                        <button type="button" className="btn btn-primary" onClick={getPosts}>GET Posts</button>
                    </p>
                    <p>
                        <textarea className="form-control" rows="6" aria-label="With textarea" value={posts} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Posts