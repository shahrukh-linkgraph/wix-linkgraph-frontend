import './App.css';
// import Users from './components/UsersComponent';
import Home from "./pages/Home/Home"
// import UserList from './components/UserListComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from './components/Navigation';
// import AddPostCategory from './pages/Home/components/AddPostCategory';
import AddPostCategory from './pages/Home/components/Categories/AddPostCategory';
// import Categories from './pages/Home/components/Categories';
import Categories from './pages/Home/components/Categories/Categories';
import Posts from './pages/Home/components/Categories/Posts';
import Add from './pages/Add';
import AddPosts from './pages/AddPosts';
import NavBar from './pages/NavBar/NavBar';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/get" element={<AddPostCategory />} />
          <Route exact path="/post" element={<Categories />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/addposts" element={<AddPosts />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;