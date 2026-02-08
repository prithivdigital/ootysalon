import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SalonDetail from "./pages/SalonDetail";
import SalonList from "./pages/SalonList";
import ListYourSalon from "./pages/ListYourSalon";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* All salons directory */}
        <Route path="/salons" element={<SalonList />} />

        {/* Individual salon page */}
        <Route path="/list-your-salon" element={<ListYourSalon />} />

        <Route path="/salon/:id" element={<SalonDetail />} />
      </Routes>
    </Router>
    
  );
}

export default App;
