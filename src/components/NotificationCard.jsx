import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

export default function NotificationCard({
  notification,
}) {
  const viewed =
    localStorage.getItem(notification.ID);

  const handleClick = () => {
    localStorage.setItem(
      notification.ID,
      "viewed"
    );

    window.location.reload();
  };

  return (
    <Card
      sx={{ mb: 2 }}
      onClick={handleClick}
    >
      <CardContent>
        <Typography>
          {viewed ? "Viewed" : "New"}
        </Typography>

        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}