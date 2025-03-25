import { Button } from "@mui/material";
import { SkipSizeCardProps } from "./SkipSizeCard";

export const SkipSelectButton: React.FC<SkipSizeCardProps> = ({
  skip,
  selected,
  onSelect,
}) => (
    <Button
    variant="contained"
    fullWidth
    onClick={!skip.allows_heavy_waste || !skip.allowed_on_road ? undefined : onSelect}
    sx={{
      fontSize: "14px",
      fontWeight: "bold",
      padding: "10px",
      backgroundColor: selected ? "#003366" : "#004080",
      cursor: !skip.allows_heavy_waste || !skip.allowed_on_road ? "not-allowed" : "pointer",
      textTransform: "capitalize", // Ensures only the first letter is uppercase
      boxShadow: "none", // Removes the border effect on click
      "&:hover": {
        backgroundColor: selected ? "#002244" : "#002E5D",
        boxShadow: "none", // Prevents shadow on hover
      },
      "&:active": {
        boxShadow: "none", // Removes border effect on click
      },
      "&:focus": {
        outline: "none", // Removes focus outline
      },
    }}
    disableRipple
    disabled={!skip.allows_heavy_waste}
  >
    {selected ? "✔ Selected" : "Select this skip →"}
  </Button>
  
);