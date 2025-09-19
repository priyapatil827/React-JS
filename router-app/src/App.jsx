import React, { useState } from 'react'
import SignIn from './Components/SignIn/SignIn'
import Product from './Components/Product/Product'
import Navbar from './Components/Navbar/Navbar'
import { products } from './json/data'
import { Routes, Route, useNavigate, Link } from "react-router-dom"
import Carts from './Components/Carts/Cart'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from './Components/Services/Services'
import ProductDetails from './Components/ProductDetails/ProductDetails'






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
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path="/product" element={<Product products={products} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Carts cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} onAddToCart={handleAddToCart} />}
        />
      </Routes >
    </>
  )
}
