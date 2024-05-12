import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "@stripe/stripe-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import BecomeASensei from "./pages/BecomeASensei";
import NewSensei from "./pages/NewSensei";
import SenseiProfile from "./pages/SenseiProfile";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/become-a-sensei" element={<BecomeASensei />} />
        <Route path="/new-sensei" element={<NewSensei />} />
        <Route path="/sensei-profile/:senseiId" element={<SenseiProfile />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
