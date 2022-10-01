import { books } from "./data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import Nav from "./components/Nav";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    console.log(book.quantity);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
