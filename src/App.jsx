import "./App.css";
import { NwGitHubUsers } from "./components/NwGithubUsers";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contatti</Link>
              </li>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<NwGitHubUsers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
