import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import data from "../_mock/data";
import HouseCard from "../components/card/HouseCard";
import Box from "@mui/material/Box";

function Main() {
  console.log(data);
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Grid item key={item} xs={12} sm={4} md={2.4}>
            {
              <HouseCard
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
