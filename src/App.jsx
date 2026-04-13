import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <nav>
      <Link to="/home" className="box-border size-32 border-4 p-4">Home</Link>|{" "}
        <Link to="/about" className="box-border size-32 border-4 p-4">About</Link> |{" "}
        <Link to="/profile" className="box-border size-32 border-4 p-4">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
