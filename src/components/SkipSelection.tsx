import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import { SkipSizeCard } from "./SkipSizeCard/SkipSizeCard";

export interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export default function SkipSelection() {
  const [skipOptions, setSkipOptions] = useState<SkipOption[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

  useEffect(() => {
    async function fetchSkips() {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        const data: SkipOption[] = await response.json();
        setSkipOptions(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch skips", error);
        setLoading(false);
      }
    }
    fetchSkips();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", padding: 4 }}>
        <CircularProgress />
        <Typography variant="h6">Loading skip options...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 2 }}>
        Select Your Skip Size
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        gutterBottom
        sx={{ marginBottom: 2 }}
      >
        Choose the skip size that fits your needs.
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {skipOptions.map((skip) => (
          <Grid item key={skip.id} xs={12} sm={6} md={4}>
            <SkipSizeCard
              skip={skip}
              selected={selectedSkip === skip.id}
              onSelect={() => setSelectedSkip(skip.id)}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ marginTop: "20px" }}>
        {!selectedSkip ? (
          <></>
        ) : (
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "fixed",
              bottom: 20,
              left: "46%",
              animation: "pulse 1.5s infinite",
              "@keyframes pulse": {
                "0%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.05)" },
                "100%": { transform: "scale(1)" },
              },
            }}
          >
            Continue →
          </Button>
        )}
      </Box>
    </Box>
  );
}
