import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/login" element={<Login />}></Route>
        <Route  path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
