import { Box } from "@mui/material";

export const SkipSizeLabel: React.FC<{ size: number }> = ({ size }) => (
  <Box
    sx={{
      position: "absolute",
      top: 8,
      right: 8,
      bgcolor: "rgba(0, 51, 102, 0.9)",
      color: "white",
      px: 2,
      py: 0.5,
      borderRadius: "16px",
      fontSize: "14px",
      fontWeight: "bold",
    }}
  >
    {size} Yards
  </Box>
);