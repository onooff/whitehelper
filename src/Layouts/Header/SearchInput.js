import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search as SearchIcon } from "@mui/icons-material";

export default function SearchInput() {
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

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        fullWidth={true}
      />
    </Search>
  );
}