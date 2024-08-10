import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";


function App() {
  return (
    <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/:planetName" element={<Info />} />
    </Routes>
  );
}

export default App;
