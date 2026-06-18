import { useEffect, useState } from "react";

import {
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import DashboardCard from "../components/DashboardCard";

import { getDashboard } from "../services/dashboardService";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();

      setDashboard(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (!dashboard) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Typography variant="h4" mb={4}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <DashboardCard title="Products" value={dashboard.total_products} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <DashboardCard title="Customers" value={dashboard.total_customers} />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <DashboardCard title="Orders" value={dashboard.total_orders} />
        </Grid>
      </Grid>

      <Typography variant="h5" mt={5} mb={2}>
        Low Stock Products
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>

              <TableCell>Name</TableCell>

              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dashboard.low_stock_products.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>

                <TableCell>{item.name}</TableCell>

                <TableCell>{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Dashboard;
