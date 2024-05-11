import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/become-a-tutor" element={<h1>Become a turor</h1>} />
        <Route path="/login" element={<h1>Log In</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
