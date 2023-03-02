import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CartPage from "./components/CartPage/CartPage";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
// import Navbar from "./components/Navbar";
// import ProductCard from "./components/ProductCard";
// import CartPage from "./components/cartPage";

function App() {
  return (
      <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<ProductCard/>} />
      <Route exact path="/cart" element={<CartPage/>}/>
       </Routes>
      </div>
  );
}

export default App;
