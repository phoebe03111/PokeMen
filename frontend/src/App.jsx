import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BecomeASensei from "./pages/BecomeASensei";
import NewSensei from "./pages/NewSensei";
import SenseiProfile from "./pages/SenseiProfile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/become-a-sensei" element={<BecomeASensei />} />
        <Route path="/new-sensei" element={<NewSensei />} />
        <Route path='/sensei-profile/:senseiId' element={<SenseiProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
