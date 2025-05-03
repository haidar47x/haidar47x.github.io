import { HashRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";
import Articles from "./components/pages/Articles";
import ScrollToTop from "./components/partials/ScrollToTop";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL ?? "/"}>
      <ScrollToTop />
      <div className="site-container">
        <Navbar />
        <main className="content text-2xl dark:text-slate-200">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
