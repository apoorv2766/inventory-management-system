import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ProductList = ({
  products,

  onDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>

            <TableCell>Name</TableCell>

            <TableCell>SKU</TableCell>

            <TableCell>Price</TableCell>

            <TableCell>Quantity</TableCell>

            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>

              <TableCell>{item.name}</TableCell>

              <TableCell>{item.sku}</TableCell>

              <TableCell>{item.price}</TableCell>

              <TableCell>{item.quantity}</TableCell>

              <TableCell>
                <Button color="error" onClick={() => onDelete(item.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductList;
