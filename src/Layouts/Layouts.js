import { useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { customTheme } from "../configs/customTheme";
import Header from "./Header";
import Footer from "./Footer";

export default function Layouts({ chlidren }) {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Box component="main" sx={{ mt: "0.5rem", mb: `${footerHeight + 0.5}rem` }}>
        {chlidren}
      </Box>
      <Footer setFooterHeight={setFooterHeight} />
    </ThemeProvider>
  );
}
