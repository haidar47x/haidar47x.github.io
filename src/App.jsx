import About from "./components/pages/About"
import Navbar from "./components/partials/Navbar"

function App() {

  return (
    <div className="site-container">
      <Navbar />
      <main class="content">
        <About />
      </main>
    </div>
  )
}

export default App
