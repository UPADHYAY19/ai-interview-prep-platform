import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import ProblemPage from "./pages/ProblemPage";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/problems" element={<Problems />} />

        {/* Future coding problem page */}

        <Route path="/problem/:id" element={<ProblemPage />} />

      </Routes>

    </div>
  );
}

export default App;