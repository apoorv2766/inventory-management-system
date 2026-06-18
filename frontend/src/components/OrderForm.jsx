import { useState, useEffect } from "react";

import { Box, Button, MenuItem, TextField } from "@mui/material";

import { getCustomers } from "../services/customerService";

import { getProducts } from "../services/productService";

const OrderForm = ({ onSubmit }) => {
  const [customers, setCustomers] = useState([]);

  const [products, setProducts] = useState([]);

  const [customerId, setCustomerId] = useState("");

  const [productId, setProductId] = useState("");

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const customerData = await getCustomers();

    const productData = await getProducts();

    setCustomers(customerData);

    setProducts(productData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      customer_id: Number(customerId),

      items: [
        {
          product_id: Number(productId),

          quantity: Number(quantity),
        },
      ],
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",

        gap: 2,

        mb: 4,

        flexWrap: "wrap",
      }}
    >
      <TextField
        select
        label="Customer"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        sx={{ minWidth: 220 }}
      >
        {customers.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.full_name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Product"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        sx={{ minWidth: 220 }}
      >
        {products.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="number"
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <Button type="submit" variant="contained">
        Create Order
      </Button>
    </Box>
  );
};

export default OrderForm;
