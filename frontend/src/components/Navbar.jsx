import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            flexGrow: 1,

            gap: 1,
          }}
        >
          <InventoryIcon />

          <Typography variant="h6">Inventory Management System</Typography>
        </Box>

        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>

        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>

        <Button color="inherit" component={Link} to="/customers">
          Customers
        </Button>

        <Button color="inherit" component={Link} to="/orders">
          Orders
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
