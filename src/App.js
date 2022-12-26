import './App.css';
// import Users from './components/UsersComponent';
import Home from "./pages/Home/Home"
// import UserList from './components/UserListComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from './components/Navigation';
import AddPostCategory from './pages/Home/components/AddPostCategory';
import Categories from './pages/Home/components/Categories';
import Add from './pages/Add';
import NavBar from './pages/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/get" element={<AddPostCategory />} />
          <Route exact path="/post" element={<Categories />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;