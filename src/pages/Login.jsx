import { useEffect } from 'react';
import { Link as RouterLink, useOutletContext, useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Container,
  Link,
} from '@mui/material';
import { memberList } from '../_mock/member';

export default function Login() {
  //임시 로그인 구현
  const { member, setMember } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (member) {
      navigate('');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const id = data.get('id');
    const password = data.get('password');
    memberList.forEach((m) => {
      if (m.id === id && m.password === password) setMember((prev) => m);
    });
  };

  return (
    <Container maxWidth="xs">
      <Box
        mt="5vh"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="div"
          sx={{
            backgroundImage: "url('/mock/login/whitehelper.png')",
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '10rem',
          }}
        />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            autoComplete="id"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="로그인 정보 기억하기"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={RouterLink} to="/">
                ID / PW 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/">
                가입하기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
