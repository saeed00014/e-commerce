import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/header";
import Card from "./pages/card/card";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
