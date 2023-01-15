import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <>
      <Header />
      <Box component="main" sx={{ mb: `${footerHeight}rem` }}>
        <Outlet />
      </Box>
      <Footer setFooterHeight={setFooterHeight} />
    </>
  );
}
