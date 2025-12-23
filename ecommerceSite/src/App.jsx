import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import DetailPage from "./pages/DetailPage"; 
import CartPage from "./pages/CartPage";     

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    
    if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
      console.log("Page reloaded, redirecting to Home...");
      // navigate("/"); // this was just a test to check my home page 
    }
  }, [navigate]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;