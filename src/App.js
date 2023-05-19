import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Container from "./Container";
import Home from "./Home";
import Cart from "./Cart";
import Profile from "./Profile";
import "./App.css";
import Search from "./Search";

function App() {
  const [page, setPage] = useState("/");
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/data")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);

  function addNewNft(nft) {
    setData((prevData) => [...prevData, nft]);
  }

  function addToCart(nft) {
    setCartItems((prevItems) => [...prevItems, nft]);
  }

  function removeFromCart(itemId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  }

  function getCurrentPage() {
    switch (page) {
      default:
        return <h1>MoonBeach</h1>;
      case "/":
        return <Home />;
      case "/nft":
        return <Container data={data} addToCart={addToCart} />;
    }
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar onChangePage={setPage} />
        <Routes>
          <Route
            path="/"
            element={
              <img
                src="https://i.etsystatic.com/5811639/r/il/0c8152/4565700251/il_794xN.4565700251_5532.jpg"
                alt="toy header"
                style={{ width: "100px", height: "100px" }}
              />
            }
          />
          <Route
            path="/profile"
            element={<Profile addNewNft={addNewNft} data={data} />}
          />
          <Route
            path="/nft"
            element={<Container data={data} addToCart={addToCart} />}
          />
           <Route
            path="/search"
            element={<Search data={data }/>}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </BrowserRouter>
      {getCurrentPage()}
    </div>
  );
}

export default App;
