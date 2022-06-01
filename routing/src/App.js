import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="/products/:id" element={<Product />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
