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

const CustomerList = ({
  customers,

  onDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>

            <TableCell>Name</TableCell>

            <TableCell>Email</TableCell>

            <TableCell>Phone</TableCell>

            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {customers.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>

              <TableCell>{item.full_name}</TableCell>

              <TableCell>{item.email}</TableCell>

              <TableCell>{item.phone}</TableCell>

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

export default CustomerList;
