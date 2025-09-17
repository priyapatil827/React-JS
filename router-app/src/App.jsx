import React, { useState } from 'react'
import Product from './Components/Product/Product'
import Navbar from './Components/Navbar/Navbar'
import { products } from './json/data'
import { Routes, Route, useNavigate, Link } from "react-router-dom"
import Carts from './Components/Carts/Cart'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './Components/Contact/Contact'





export default function App() {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    navigate("/cart");
  }

  return (
    <>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/product" element={<Product products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Carts cartItems={cartItems} setCartItems={setCartItems} />} />

      </Routes>
    </>
  )
}
