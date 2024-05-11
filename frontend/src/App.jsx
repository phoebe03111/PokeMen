import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/become-a-tutor" element={<h1>Become a turor</h1>} />
        <Route path="/login" element={<h1>Log In</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
