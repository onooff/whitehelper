import { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { customTheme } from "../configs/customTheme";
import Header from "./Header";
import Footer from "./Footer";

export default function Layouts() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [member, setMember] = useState(null);
  const navigate = useNavigate();
  const notInitialRender = useRef(false)

  useEffect(() => {
    if (!notInitialRender.current) {
      if (member)
        navigate("");
    }
  }, [member])

  return (
    <ThemeProvider theme={customTheme}>
      <Header member={member} setMember={setMember} />
      <Box component="main" sx={{ mt: "0.5rem", mb: `${footerHeight + 0.5}rem` }} >
        <Outlet context={{ member, setMember }} />
      </Box>
      <Footer setFooterHeight={setFooterHeight} />
    </ThemeProvider>
  );
}
