import React from "react";
import { Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { SkipImage } from "./SkipImage";
import { SkipDetails } from "./SkipDetails";
import { SkipSelectButton } from "./SkipSelectButton";

export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allows_heavy_waste: boolean;
  allowed_on_road: boolean;
}

export interface SkipSizeCardProps {
  skip: Skip;
  selected: boolean;
  onSelect: () => void;
}

const SkipCardContainer: React.FC<SkipSizeCardProps> = ({
  skip,
  selected,
  onSelect,
}) => {
  const isLightWasteOnly = !skip.allows_heavy_waste;

  return (
    <motion.div
      key={skip.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          borderRadius: "12px",
          boxShadow: selected ? "0px 0px 20px rgba(0, 51, 102, 0.7)" : 3,
          textAlign: "left",
          cursor: isLightWasteOnly ? "not-allowed" : "pointer",
          overflow: "hidden",
          transition: "all 0.3s ease",
          transform: selected ? "scale(1.08)" : "scale(1)",
          opacity: isLightWasteOnly ? 0.5 : 1,
          "&:hover": {
            transform: isLightWasteOnly ? "scale(1)" : "scale(1.05)",
            boxShadow: isLightWasteOnly
              ? 3
              : "0px 0px 15px rgba(0, 51, 102, 0.5)",
          },
          margin: "12px",
        }}
        onClick={!isLightWasteOnly ? onSelect : undefined}
      >
        <SkipImage skip={skip} selected={selected} />
        <CardContent>
          <SkipDetails skip={skip} />
        </CardContent>
        <SkipSelectButton skip={skip} selected={selected} onSelect={onSelect} />
      </Card>
    </motion.div>
  );
};

export { SkipCardContainer as SkipSizeCard };
