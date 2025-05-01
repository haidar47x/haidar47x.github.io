import About from "./components/pages/About";
import Footer from "./components/partials/Footer";
import Navbar from "./components/partials/Navbar";

function App() {
  return (
    <div className="site-container">
      <Navbar />
      <main className="content text-2xl">
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
