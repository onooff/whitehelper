import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import Link from "@mui/material/Link";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import { Stack } from "@mui/system";

export default function HouseContent({ id, locate, rate, price }) {
  return (
    <Box>
      <Link href={`detail/${id}`} underline="none" color="black">
        <Typography variant="h7" component="div" align="left" mb={0.5}>
          {locate}
        </Typography>

        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h7" component="div">
            <SavingsTwoToneIcon sx={{ fontSize: "medium" }} />
            {price}
          </Typography>
          <Typography variant="body2" component="div" align="right">
            <StarRateIcon sx={{ fontSize: "small" }} />
            {rate}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
}
