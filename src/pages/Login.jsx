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
import firebaseInit from '../configs/firebaseInit';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function Login() {
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
    const email = data.get('email');
    const password = data.get('password');
    const remember = data.get('remember');
    if (remember) {
      localStorage.setItem('rememberEmail', email);
    } else {
      localStorage.removeItem('rememberEmail');
    }

    const app = firebaseInit();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;

        const db = getFirestore(app);
        getDoc(doc(db, 'member', uid)).then((docSnap) => {
          const m = docSnap.data();
          m.favorite = new Set(m.favorite);
          m.uid = uid;
          alert('로그인 성공');
          setMember(m);
        });
      })
      .catch((error) => {
        alert('로그인 실패');
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={localStorage.rememberEmail}
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
            control={
              <Checkbox
                name="remember"
                color="primary"
                defaultChecked={localStorage.rememberEmail ? true : false}
              />
            }
            label="Email 기억하기"
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
              <Link component={RouterLink} to="/join">
                가입하기
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
