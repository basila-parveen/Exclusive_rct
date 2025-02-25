import React from "react";
import Header from "./components/screen/Header";
import FirstScreen from "./components/screen/FirstScreen";
import "./App.css";
import Products from "./components/screen/Products";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/screen/Footer";
import { SearchProvider } from "./components/context/Context";
import Gaming from "./components/screen/Gaming";

function App() {
  return (
    <Router>
      <SearchProvider>
        <Header />
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Gaming />} />
        </Routes>
        <Footer />
      </SearchProvider>
    </Router>
  );
}

export default App;
