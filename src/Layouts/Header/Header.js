import { useState } from "react";
import { Box, Grid, Link } from "@mui/material"
import SearchInput from "./SearchInput";
import ButtonGroup from "./ButtonGroup";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: `4rem`,
    bgcolor: "background.paper",
    boxShadow: " 0 0 15px 0 rgba(0, 0, 0, 0.15)",
  };

  return (
    <Grid container component="header" sx={headerStyle}>
      <Grid item xs={0.2} />
      <Grid item xs={4.3} display="flex" justifyContent="left" alignItems="center">
        <Link href="/">
          <Box component="img" alt="whitehelper_logo" src="/logo.svg" sx={{ width: "15rem", }} />
        </Link>
      </Grid>
      <Grid item xs={3} display="flex" justifyContent="center" alignItems="center">
        <SearchInput />
      </Grid>
      <Grid item xs={4.3} display="flex" justifyContent="right" alignItems="center">
        <ButtonGroup isLogin={isLogin} setIsLogin={setIsLogin} sx={{ width: "100%", }} />
      </Grid>
      <Grid item xs={0.2} />
    </Grid>
  );
}