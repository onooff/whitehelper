import { useEffect } from "react";
import { Stack } from "@mui/material";
import Copyright from "./Copyright";

export default function Footer({ setFooterHeight }) {
  const footerHeight = 3;
  useEffect(() => { setFooterHeight(footerHeight) })

  const footerStyle = {
    position: "fixed",
    bottom: 0, left: 0, right: 0,
    zIndex: "100",
    height: `${footerHeight}rem`,
    bgcolor: "background.paper",
    boxShadow: " 0 0 15px 0 rgba(0, 0, 0, 0.15)",
  };

  return (
    <Stack component="footer" sx={footerStyle} direction="column" justifyContent="space-around" alignItems="center" height="100%">
      <Copyright siteName="WHITE HELPER" />
    </Stack>
  );
}
