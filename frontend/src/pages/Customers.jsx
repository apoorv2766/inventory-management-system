import { useEffect, useState } from "react";

import { Typography } from "@mui/material";

import CustomerForm from "../components/CustomerForm";

import CustomerList from "../components/CustomerList";

import {
  getCustomers,
  createCustomer,
  deleteCustomer,
} from "../services/customerService";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    const data = await getCustomers();

    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleCreate = async (payload) => {
    await createCustomer(payload);

    fetchCustomers();
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);

    fetchCustomers();
  };

  return (
    <>
      <Typography variant="h4" mb={4}>
        Customers
      </Typography>

      <CustomerForm onSubmit={handleCreate} />

      <CustomerList customers={customers} onDelete={handleDelete} />
    </>
  );
};

export default Customers;
