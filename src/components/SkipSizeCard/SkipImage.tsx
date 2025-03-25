import { Box } from "@mui/material";
import { SkipSizeLabel } from "./SkipSizeLabel";
import { SkipWarningLabel } from "./SkipWarningLabel";
import { Skip } from "./SkipSizeCard";

export const SkipImage: React.FC<{ skip: Skip; selected: boolean }> = ({
  skip,
  selected,
}) => (
  <Box
    sx={{
      position: "relative",
      height: "150px",
      backgroundImage: `url("https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: selected ? "rgba(0, 51, 102, 0.4)" : "rgba(0, 0, 0, 0.3)",
        transition: "background 0.3s ease",
      },
    }}
  >
    <SkipSizeLabel size={skip.size} />
    <SkipWarningLabel skip={skip} />
  </Box>
);