import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddPostCategory from "./pages/Home/components/Categories/AddPostCategory";
import Home from "./pages/Home/Home";
import Categories from "./pages/Home/components/Categories/Categories";
import Posts from "./pages/Home/components/Categories/Posts";
import Add from "./pages/Add";
import AddPosts from "./pages/AddPosts";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginLinkGraph from "./pages/LoginLinkGraph";
import AddCategory from "./pages/AddCategory";
import ListCategory from "./pages/ListCategory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/get" element={<AddPostCategory />} />
          <Route exact path="/post" element={<Categories />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/addposts" element={<AddPosts />} />
          <Route exact path="/login" element={<LoginLinkGraph />} />
          <Route exact path="/add-category" element={<AddCategory />} />
          <Route exact path="/list-category" element={<ListCategory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
