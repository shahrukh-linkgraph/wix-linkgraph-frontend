import "./Home.css";
import Categories from "./components/Categories/Categories";
import Posts from "./components/Categories/Posts";
import AddPostCategory from "./components/Categories/AddPostCategory";

function Home() {
  return (
    <div className="App">
      <Categories />
      <Posts />
      <AddPostCategory />
    </div>
  );
}

export default Home;
