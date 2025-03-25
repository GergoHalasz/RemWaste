import { Box } from "@mui/material";
import { WarningBadge } from "./WarningBadge";
import { Skip } from "./SkipSizeCard";

export const SkipWarningLabel: React.FC<{ skip: Skip }> = ({ skip }) => {
  const isOffRoadOnly = !skip.allowed_on_road;
  const isLightWasteOnly = !skip.allows_heavy_waste;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 8,
        left: 8,
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      {isOffRoadOnly && (
        <WarningBadge text="Private Property Only" color="yellow" />
      )}
      {isLightWasteOnly && (
        <WarningBadge text="Not Suitable for Heavy Waste" color="red" />
      )}
    </Box>
  );
};