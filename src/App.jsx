import Navbar from "./components/Navbar";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
