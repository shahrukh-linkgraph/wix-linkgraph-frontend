import './App.css';
import Users from './components/UsersComponent';
import UserList from './components/UserListComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="user" element={<Users />} />
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;