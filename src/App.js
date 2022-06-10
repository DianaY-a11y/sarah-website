import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Sister from "./sister";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sister" element={<Sister />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
