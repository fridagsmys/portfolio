import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";
// import Blog from "./pages/Blog";
// import Post from "./pages/Post";
// import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/connect" element={<Connect />} />
        {/* <Route path="/portfolio/blog" element={<Blog />} />
        <Route path="/portfolio/blog/:id" element={<Post />} />
        <Route path="/portfolio/game" element={<GamePage />} /> */}
      </Routes>
        <Footer />
    </Router>
  );
};

export default App;
