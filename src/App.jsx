import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/about";
import Checkout from "./pages/Checkout";
import Cart from "./pages/cart";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/layout";
import Shop from "./pages/Shop";
import DeliveryTeam from "./pages/DeliveryTeam";
import Seller from "./pages/Seller";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/deliverteam" element={<DeliveryTeam />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
