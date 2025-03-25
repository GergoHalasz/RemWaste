import { Typography } from "@mui/material";
import { Skip } from "./SkipSizeCard";

export const SkipDetails: React.FC<{ skip: Skip }> = ({ skip }) => {
    const totalPrice = Math.floor(
      skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100
    );
  
    return (
      <>
        <Typography variant="body1" fontWeight="bold" sx={{ fontSize: "16px" }}>
          {skip.size} Yard Skip
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "14px" }}
        >
          {skip.hire_period_days} day hire period
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          £{totalPrice}
          <Typography
            component="span"
            sx={{ fontSize: "12px", color: "gray", marginLeft: "5px" }}
          >
            per week
          </Typography>
        </Typography>
      </>
    );
  };