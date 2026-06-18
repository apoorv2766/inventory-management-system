import { useEffect, useState } from "react";

import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

import OrderForm from "../components/OrderForm";

import { getOrders, createOrder, deleteOrder } from "../services/orderService";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const data = await getOrders();

    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleCreate = async (payload) => {
    await createOrder(payload);

    fetchOrders();
  };

  const handleDelete = async (id) => {
    await deleteOrder(id);

    fetchOrders();
  };

  return (
    <>
      <Typography variant="h4" mb={4}>
        Orders
      </Typography>

      <OrderForm onSubmit={handleCreate} />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>

              <TableCell>Customer ID</TableCell>

              <TableCell>Total</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>

                <TableCell>{item.customer_id}</TableCell>

                <TableCell>₹{item.total_amount}</TableCell>

                <TableCell>
                  <Button color="error" onClick={() => handleDelete(item.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Orders;
