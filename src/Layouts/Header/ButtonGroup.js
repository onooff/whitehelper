import PropTypes from "prop-types";
import { ButtonGroup as MuiButtonGroup, Button, Tooltip } from "@mui/material";
import { QuestionMark, Phone, Login } from "@mui/icons-material";
import LoggedInMenuButton from "./LoggedInMenuButton";

export default function ButtonGroup({ isLogin, setIsLogin }) {
  const flip = () => { setIsLogin((prev) => !prev) }
  return (
    <MuiButtonGroup variant="contained">
      <Tooltip title="화이트헬퍼 소개">
        <Button><QuestionMark /></Button>
      </Tooltip>
      <Tooltip title="문의처">
        <Button><Phone /></Button>
      </Tooltip>
      {
        isLogin ?
          <LoggedInMenuButton />
          :
          <Button onClick={flip}><Login /></Button>
      }
    </MuiButtonGroup >
  );
}

ButtonGroup.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired
};