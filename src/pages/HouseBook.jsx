import React, { useState } from 'react';
import {
  Box,
  Container,
  Stack,
  Paper,
  Typography,
  Divider,
  Grid,
  Button,
  styled,
  IconButton,
  Link,
} from '@mui/material';
import { useOutletContext, useNavigate, useSearchParams } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { houses } from '../_mock/data';
import SubmitDialog from '../components/book/SubmitDialog';
import DateDialog from '../components/book/DateDialog';
import { period, convertDate, getDateDiff } from '../utils/dateUtils';
import { subDays } from 'date-fns';

const StyledHouseImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  position: 'relative',
});

export default function HouseBook() {
  const { member, setMember } = useOutletContext();
  const [submitOpen, setSubmitOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  const house = houses[id];
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');

  const [date, setDate] = useState({
    startDate: new Date(startDate),
    endDate: new Date(endDate),
  });

  function backButtonHandler() {
    navigate(-1);
  }

  const SubmitDialogClickHandler = () => {
    setSubmitOpen(true);
  };
  const DateDialogClickHandler = () => {
    setDateOpen(true);
  };

  return (
    <Box>
      <Container maxWidth="xl">
        {/* 타이틀 */}
        <Container
          sx={{
            padding: '0 80px',
          }}
        >
          <Stack direction={'row'} spacing={3} sx={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <IconButton aria-label="back" size="medium" onClick={backButtonHandler}>
              <ArrowBackIosIcon sx={{ color: 'black' }} />
            </IconButton>
            <Typography variant="h4" mb={1} align="center">
              예약 요청
            </Typography>
          </Stack>
          <Box>
            <Grid container justifyContent={'space-between'}>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h4" mb={1}>
                      예약 정보
                    </Typography>
                  </Box>

                  <Box>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Box>
                        <Box mb={1}>
                          <Typography variant="h7">날짜</Typography>
                        </Box>
                        <Box>
                          <Typography variant="h7">{period(date)}</Typography>
                        </Box>
                      </Box>
                      <Link component="button" onClick={DateDialogClickHandler}>
                        수정
                      </Link>
                    </Stack>
                    <DateDialog
                      state={date}
                      setState={setDate}
                      open={dateOpen}
                      setOpen={setDateOpen}
                    />
                  </Box>
                  <Divider />
                  <Box>
                    <Box mb={2}>
                      <Typography variant="h5">환불 정책</Typography>
                    </Box>
                    <Box>
                      {/* <Typography variant="h7">
                        {convertDate(date.startDate)} 오후 12:00 전에 취소하면 부분 환불을 받으실 수
                        있습니다. 그 이후에는 취소 시점에 따라 환불액이 결정됩니다.
                      </Typography> */}
                      {getDateDiff([{ startDate: new Date(), endDate: date.startDate }]) <= 7 ? (
                        <Typography variant="h7">
                          {convertDate(date.startDate)} 오후 12:00 전에 취소하면 부분 환불을 받으실
                          수 있습니다. 그 이후에는 취소 시점에 따라 환불액이 결정됩니다.
                        </Typography>
                      ) : (
                        <Typography variant="h7">
                          <span style={{ fontWeight: 'bold' }}>
                            {convertDate(subDays(date.startDate, 7))} 전까지 무료로 취소하실 수
                            있습니다.
                          </span>{' '}
                          체크인 날짜인 {convertDate(date.startDate)} 전에 취소하면 부분 환불을
                          받으실 수 있습니다.
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                  {!member ? (
                    <Box>
                      <Button onClick={SubmitDialogClickHandler}>
                        <Typography variant="h5" mb={1}>
                          예약하기
                        </Typography>
                      </Button>
                      <SubmitDialog open={submitOpen} setOpen={setSubmitOpen} />
                    </Box>
                  ) : (
                    <Typography variant="h5" mb={1}>
                      예약하려면 로그인이 필요합니다.
                    </Typography>
                  )}
                </Stack>
              </Grid>
              <Box
                component={'div'}
                sx={{
                  position: 'relative',
                  width: '41.667%',
                  marginLeft: '8.3333%',
                  marginRight: '0%',
                }}
              >
                <Paper variant="outlined" sx={{ borderRadius: '12px', padding: '24px' }}>
                  <Stack spacing={2}>
                    <Grid container justifyContent={'space-between'} mb={'1rem'}>
                      <Grid container item xs={4}>
                        <Box
                          component={'div'}
                          sx={{
                            width: '8rem',
                            height: '7rem',
                          }}
                        >
                          <StyledHouseImg src={house.img[0]} alt="house" />
                        </Box>
                      </Grid>
                      <Grid container item xs={8} alignContent="center">
                        <Container>
                          <Typography variant="h6">{house.locate}</Typography>
                        </Container>
                        <Container>
                          <Typography variant="h7">
                            <StarRateIcon sx={{ fontSize: 'small' }} />
                            {house.rate}
                          </Typography>
                        </Container>
                        <Container>
                          <Typography component="span" variant="h7">
                            <SavingsTwoToneIcon sx={{ fontSize: 'small' }} />
                            {house.price}/박
                          </Typography>
                        </Container>
                      </Grid>
                    </Grid>

                    {!member ? (
                      <Box>
                        <Divider />
                        <Stack spacing={1}>
                          <Box mt={2} mb={1}>
                            <Typography variant="h6">요금 세부정보</Typography>
                          </Box>
                          <Box>
                            <Stack direction={'row'} justifyContent="space-between">
                              <Typography variant="h7">보유한 포인트</Typography>
                              <Typography variant="h7">data</Typography>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction={'row'} justifyContent="space-between">
                              <Typography variant="h7">필요한 포인트</Typography>
                              <Typography variant="h7">data</Typography>
                            </Stack>
                          </Box>
                          <Divider />
                          <Box>
                            <Stack direction={'row'} justifyContent="space-between">
                              <Typography variant="h7">내 잔여 포인트</Typography>
                              <Typography variant="h7">data</Typography>
                            </Stack>
                          </Box>
                        </Stack>
                      </Box>
                    ) : null}
                  </Stack>
                </Paper>
              </Box>
            </Grid>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
