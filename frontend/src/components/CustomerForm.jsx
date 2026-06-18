import { useState } from "react";

import { Box, Button, TextField } from "@mui/material";

const CustomerForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    full_name: "",

    email: "",

    phone: "",
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
      full_name: "",

      email: "",

      phone: "",
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
        name="full_name"
        label="Full Name"
        value={form.full_name}
        onChange={handleChange}
      />

      <TextField
        name="email"
        label="Email"
        value={form.email}
        onChange={handleChange}
      />

      <TextField
        name="phone"
        label="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained">
        Add Customer
      </Button>
    </Box>
  );
};

export default CustomerForm;
