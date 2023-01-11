import React from "react";
import HouseCarousel from "./HouseCarousel";
import Stack from "@mui/material/Stack";
import HouseContent from "./HouseContent";

export default function HouseCard({ img, locate, price, rate }) {
  return (
    <>
      <Stack>
        <HouseCarousel img={img} />
        <HouseContent locate={locate} price={price} rate={rate} />
      </Stack>
    </>
  );
}
