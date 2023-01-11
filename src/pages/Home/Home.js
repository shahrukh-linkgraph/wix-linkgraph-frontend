import "./Home.css";
import Categories from "./components/Categories/Categories";
import Posts from "./components/Categories/Posts";
// import AddPostCategory from "./components/Categories/AddPostCategory";
// import { addMemberRequest } from "../AddMember/redux/actions";
// import { Button, Form } from "react-bootstrap";
import AddMember from "../AddMember/AddMember";
function Home() {
  return (
    <div className="App">
      <AddMember />
      {/* <Categories />
      <Posts />
      <AddPostCategory /> */}
      </div>
    
  );
}

export default Home;
