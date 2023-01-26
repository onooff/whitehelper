import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BookComplete() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Paper elevation={3}>
          <Container
            sx={{
              padding: '0 80px 20px',
            }}
          >
            <Grid container justifyContent="center" mt={20} pt={4}>
              <Grid item>
                <CheckCircleIcon sx={{ fontSize: 100 }} />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" mt={3}>
              <Grid item>
                <Typography variant="h3">신청하신 예약이 정상적으로 완료되었습니다.</Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="center" mt={3} alignItems="center">
              <Grid item>
                <Typography variant="h5">
                  아래의 예약확인 버튼으로 연결되는 페이지에서 예약 정보확인, 예약 취소를 할 수
                  있습니다.
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              mt={3}
              alignItems="center"
              direction={'row'}
              gap={3}
            >
              <Grid item>
                <Button href="/" variant="contained" size="large">
                  홈으로
                </Button>
              </Grid>
              <Grid item>
                <Button href="/books" variant="contained" size="large">
                  예약 내역
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </Box>
  );
}
