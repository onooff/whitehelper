import PropTypes from 'prop-types';
import { ButtonGroup as MuiButtonGroup, Button } from '@mui/material';

export default function ButtonGroup({ isLogin, setIsLogin }) {
  const flip = () => { setIsLogin((prev) => !prev) }
  return (
    isLogin ? (<>
      <MuiButtonGroup>
        <Button>Login OK</Button>
        <Button onClick={flip}>LOGOUT</Button>
      </MuiButtonGroup>
    </>)
      : (<>
        <MuiButtonGroup>
          <Button>Not Login</Button>
          <Button onClick={flip}>LOGIN</Button>
        </MuiButtonGroup>
      </>)
  );
}

ButtonGroup.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired
};