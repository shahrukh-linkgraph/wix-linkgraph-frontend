import axios from "axios";

const getCategories = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data);
    });
}

const getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data);
    });
}

const addPostCategories = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data);
    });
}

export { getCategories, getPosts, addPostCategories }