import { useState } from 'react';
import { Box, Grid } from "@mui/material"
import SearchInput from "./SearchInput";
import ButtonGroup from "./ButtonGroup";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    bgcolor: 'background.paper',
    boxShadow: " 0 0 15px 0 rgb(0 0 0 / 15%)",
  };

  return (
    <Grid container component="header" sx={headerStyle}>
      <Grid item xs={0.2} />
      <Grid item xs={2.3} display="flex" justifyContent="left" alignItems="center">
        <Box component="img" alt="whitehelper_logo" src="/logo.svg" sx={{ height: "3rem", }} />
      </Grid>
      <Grid item xs={7} display="flex" justifyContent="center" alignItems="center">
        <SearchInput />
      </Grid>
      <Grid item xs={2.3} display="flex" justifyContent="right" alignItems="center">
        <ButtonGroup isLogin={isLogin} setIsLogin={setIsLogin} />
      </Grid>
      <Grid item xs={0.2} />
    </Grid>
  );
}