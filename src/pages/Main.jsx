import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { houses } from "../_mock/data";
import HouseCard from "../components/card/HouseCard";
import Box from "@mui/material/Box";

function Main() {
  return (
    <Box p={"0 80px"} m={"10px"}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {houses.map((item) => (
          <Grid item key={item} xs={12} sm={4} md={3}>
            {
              <HouseCard
                id={item.id}
                img={item.img}
                rate={item.rate}
                locate={item.locate}
                price={item.price}
              />
            }
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Main;
