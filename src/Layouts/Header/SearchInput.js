import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBase, Box, Dialog, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search as SearchIcon } from "@mui/icons-material";

export default function SearchInput() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.02)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "90%",
    boxShadow: " 0 0 15px 0 rgba(0, 0, 0, 0.15)",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
    },
  }));

  const navigateToSearch = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const keyword = data.get("keyword");
    if (!keyword) {
      setOpen(true);
    }
    else {
      navigate("/search/" + keyword);
    }
  }

  return (
    <>
      <Box component="form" onSubmit={navigateToSearch} noValidate>
        <Search>
          <SearchIconWrapper >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "30rem" }}
            id="keyword"
            name="keyword" />
        </Search>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            검색어가 입력되지 않았습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}