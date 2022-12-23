import './App.css';
// import Users from './components/UsersComponent';
import Home from "./pages/Home/Home"
// import UserList from './components/UserListComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from './components/Navigation';
import AddPostCategory from './pages/Home/components/AddPostCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<AddPostCategory />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;