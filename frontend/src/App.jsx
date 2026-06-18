import { Routes } from "react-router-dom";

import { Route } from "react-router-dom";

import { Container } from "@mui/material";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";

import Products from "./pages/Products";

import Customers from "./pages/Customers";

import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{mt: 4, mb: 6}}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
