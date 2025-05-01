import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Posts from "./components/pages/Posts";
import Projects from "./components/pages/Projects";

import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL ?? "/"}>
      <div className="site-container">
        <Navbar />
        <main className="content text-2xl">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
