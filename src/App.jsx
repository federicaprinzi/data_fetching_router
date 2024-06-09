import "./App.css";
import { NwGitHubUsers } from "./components/NwGithubUsers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./components/ShowGithubUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NwGitHubUsers />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </Router>
  );
}

export default App;
