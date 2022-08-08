import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";
import { AuthPage } from "./pages/AuthPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={ <ProductsPage /> }/>
        <Route path="/about" element={ <AboutPage /> }/>
        <Route path="/auth" element={ <AuthPage /> }/>
        <Route path="/product/:id" element={ <ProductDetailsPage /> }/>
      </Routes>
    </>
  )
}

export default App;
