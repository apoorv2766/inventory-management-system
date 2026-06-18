import { Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({
  title,

  value,
}) => {
  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Typography color="text.secondary">{title}</Typography>

        <Typography variant="h3">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
