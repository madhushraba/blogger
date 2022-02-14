import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";

import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Setting from "./pages/home/settings/Setting";
import Login from "./pages/home/login/Login";
import Register from "./pages/home/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Post from "./components/post/Post";
//import Posts from "./components/posts/Posts";
import About from "./pages/home/about/About";
import Contact from "./pages/contact/Contact";
import Logout from "./pages/home/logout/Logout";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/login"
          element={currentUser ? <Home /> : <Login />}
        />
        <Route exact path="/pages" element={<Home />} />

        <Route
          exact
          path="/about"
          element={currentUser ? <About /> : <Login />}
        />
        <Route
          exact
          path="/logout"
          element={currentUser ? <Logout /> : <Login />}
        />
        
        {/* <Route exact path="/logout" element={<Logout />} /> */}
        <Route
          exact
          path="/contact"
          element={currentUser ? <Contact /> : <Login />}
        />

        <Route
          exact
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        />
        <Route
          exact
          path="/setting"
          element={currentUser ? <Setting /> : <Login />}
        />
        <Route exact path="/post/:id" element={<Single />} />
        <Route exact path="/post/" element={<Post />} />
        <Route
          exact
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
