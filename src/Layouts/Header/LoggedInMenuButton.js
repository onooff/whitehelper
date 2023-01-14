import { useState } from "react";
import { Button, Menu, MenuItem, Fade, Avatar } from "@mui/material";
import { Person, Message, Settings, Logout } from "@mui/icons-material";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: "1.5rem", height: "1.5rem" }}><Person /></Avatar>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{ "aria-labelledby": "fade-button", }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Message /></MenuItem>
        <MenuItem onClick={handleClose}><Settings /></MenuItem>
        <MenuItem onClick={handleClose}><Logout /></MenuItem>
      </Menu>
    </>
  );
}
