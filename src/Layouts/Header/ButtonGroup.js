import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip, Button, Avatar } from "@mui/material";
import { QuestionMark, Phone, Login, Favorite, Message, Settings, Logout } from "@mui/icons-material";

export default function ButtonGroup({ member, setMember }) {
  const logout = () => { setMember((prev) => null); }

  return (
    <>
      <Tooltip title="화이트헬퍼 소개">
        <Button LinkComponent={Link} to="about">ABOUT</Button>
      </Tooltip>
      <Tooltip title="문의처">
        <Button LinkComponent={Link} to="contact">CONTACT</Button>
      </Tooltip>
      {member === null ?
        <Tooltip title="로그인">
          <Button LinkComponent={Link} to="login"><Login /></Button>
        </Tooltip>
        :
        <>
          <Tooltip title="찜목록">
            <Button LinkComponent={Link} to="/">FAVORITE</Button>
          </Tooltip>
          <Tooltip title="회원정보">
            <Button LinkComponent={Link} to="/">SETTINGS</Button>
          </Tooltip>
          <Tooltip title="로그아웃">
            <Button LinkComponent={Link} to="/" onClick={logout}><Logout /></Button>
          </Tooltip>
          <Tooltip title={member.nickname}>
            <Avatar alt={member.nickname} src={member.profileImage} />
          </Tooltip>
        </>}
    </ >
  );
}

ButtonGroup.propTypes = {
  member: PropTypes.object,
  setMember: PropTypes.func.isRequired
};