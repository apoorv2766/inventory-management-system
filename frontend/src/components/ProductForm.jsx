import { useState } from "react";

import { Box, Button, TextField } from "@mui/material";

const ProductForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",

    sku: "",

    price: "",

    quantity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);

    setForm({
      name: "",

      sku: "",

      price: "",

      quantity: "",
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
        name="name"
        label="Name"
        value={form.name}
        onChange={handleChange}
      />

      <TextField
        name="sku"
        label="SKU"
        value={form.sku}
        onChange={handleChange}
      />

      <TextField
        name="price"
        type="number"
        label="Price"
        value={form.price}
        onChange={handleChange}
      />

      <TextField
        name="quantity"
        type="number"
        label="Quantity"
        value={form.quantity}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained">
        Add Product
      </Button>
    </Box>
  );
};

export default ProductForm;
