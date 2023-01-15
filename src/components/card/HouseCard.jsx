import React from "react";
import HouseCarousel from "./HouseCarousel";
import Stack from "@mui/material/Stack";
import HouseContent from "./HouseContent";

export default function HouseCard({ id, img, locate, price, rate }) {
  return (
    <>
      <Stack>
        <HouseCarousel img={img} id={id} />
        <HouseContent id={id} locate={locate} price={price} rate={rate} />
      </Stack>
    </>
  );
}
