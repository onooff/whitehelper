import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ButtonGroup as MuiButtonGroup, Tooltip, Button, Avatar } from "@mui/material";
import { QuestionMark, Phone, Login, Message, Settings, Logout } from "@mui/icons-material";
import { memberList } from "../../_mock/member";

export default function ButtonGroup({ member, setMember }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const login = () => { setMember((prev) => memberList[0]) }
  const logout = () => { setMember((prev) => null) }
  const menuFlip = () => { setIsMenuOpen((prev) => !prev) }

  return (
    <MuiButtonGroup variant="contained">
      <Tooltip title="화이트헬퍼 소개">
        <Button LinkComponent={Link} to="about"><QuestionMark /></Button>
      </Tooltip>
      <Tooltip title="문의처">
        <Button LinkComponent={Link} to="contact"><Phone /></Button>
      </Tooltip>
      {member === null ?
        <Tooltip title="로그인">
          <Button LinkComponent={Link} to="/" onClick={login}><Login /></Button>
        </Tooltip>
        :
        <>
          {isMenuOpen ?
            <>
              <Tooltip title="메시지">
                <Button LinkComponent={Link} to="/"><Message /></Button>
              </Tooltip>
              <Tooltip title="회원정보">
                <Button LinkComponent={Link} to="/"><Settings /></Button>
              </Tooltip>
              <Tooltip title="로그아웃">
                <Button LinkComponent={Link} to="/" onClick={logout}><Logout /></Button>
              </Tooltip>
            </>
            :
            <>
            </>}
          <Tooltip title={member.nickname}>
            <Button LinkComponent={Link} to="/" onClick={menuFlip}><Avatar alt={member.nickname} src={member.profileImage} sx={{ width: "1.5rem", height: "1.5rem" }} /></Button>
          </Tooltip>
        </>}
    </MuiButtonGroup>
  );
}

ButtonGroup.propTypes = {
  member: PropTypes.object.isRequired,
  setMember: PropTypes.func.isRequired
};