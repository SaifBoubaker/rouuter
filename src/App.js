import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dev from "./Components/Dev";
import Home from "./Components/Home";
import Marketing from "./Components/Marketing";
import Navbar from "./Components/Navbar";
import Profil from "./Components/Profil";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/dev" element={<Dev />} />
        </Route>
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
