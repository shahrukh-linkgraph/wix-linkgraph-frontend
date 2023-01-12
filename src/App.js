import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories";
import Posts from "./pages/Posts";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginLinkGraph from "./pages/LoginLinkGraph";

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes history={history}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/login" element={<LoginLinkGraph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
