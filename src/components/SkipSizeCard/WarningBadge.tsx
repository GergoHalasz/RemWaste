import { Box } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export const WarningBadge: React.FC<{ text: string; color: string }> = ({
  text,
  color,
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      border: `1px solid ${color}`,
      padding: "2px 6px",
      borderRadius: "6px",
      fontSize: "10px",
      fontWeight: "bold",
      color,
      bgcolor: `rgba(${color === "yellow" ? "255, 255, 0" : "255, 0, 0"}, 0.1)`,
    }}
  >
    <WarningAmberIcon sx={{ color, fontSize: 14, marginRight: "4px" }} />
    {text}
  </Box>
);
