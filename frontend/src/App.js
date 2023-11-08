// import './App.css';
import { Routes, Route } from "react-router-dom";
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/game" element={<Game />} />
      {/* <Route path="/items" element={<ItemPage />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
