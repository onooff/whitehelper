import React, { useState, useEffect } from 'react';
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
  const [point, setPoint] = useState();
  const [isBook, setIsBook] = useState();
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
  useEffect(() => {
    setPoint(getDateDiff([{ startDate: date.startDate, endDate: date.endDate }]) * house.price);
    if (member && point <= member.point) {
      setIsBook(true);
    } else {
      setIsBook(false);
    }
  }, [point, isBook]);
  return (
    <Box>
      <Container maxWidth="xl">
        {/* ????????? */}
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
              ?????? ??????
            </Typography>
          </Stack>
          <Box>
            <Grid container justifyContent={'space-between'}>
              <Grid item xs={6}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="h4" mb={1}>
                      ?????? ??????
                    </Typography>
                  </Box>

                  <Box>
                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Box>
                        <Box mb={1}>
                          <Typography variant="h7">??????</Typography>
                        </Box>
                        <Box>
                          <Typography variant="h7">{period(date)}</Typography>
                        </Box>
                      </Box>
                      <Link component="button" onClick={DateDialogClickHandler}>
                        ??????
                      </Link>
                    </Stack>
                    <DateDialog
                      state={date}
                      setState={setDate}
                      open={dateOpen}
                      setOpen={setDateOpen}
                      setPoint={setPoint}
                      price={house.price}
                    />
                  </Box>
                  <Divider />
                  <Box>
                    <Box mb={2}>
                      <Typography variant="h5">?????? ??????</Typography>
                    </Box>
                    <Box>
                      {getDateDiff([{ startDate: new Date(), endDate: date.startDate }]) <= 7 ? (
                        <Typography variant="h7">
                          {convertDate(date.startDate)} ?????? 12:00 ?????? ???????????? ?????? ????????? ?????????
                          ??? ????????????. ??? ???????????? ?????? ????????? ?????? ???????????? ???????????????.
                        </Typography>
                      ) : (
                        <Typography variant="h7">
                          <span style={{ fontWeight: 'bold' }}>
                            {convertDate(subDays(date.startDate, 7))} ????????? ????????? ???????????? ???
                            ????????????.
                          </span>{' '}
                          ????????? ????????? {convertDate(date.startDate)} ?????? ???????????? ?????? ?????????
                          ????????? ??? ????????????.
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                  {member ? (
                    <Box>
                      <Button
                        mt={2}
                        variant="contained"
                        sx={{
                          width: '100%',
                          height: '100%',
                        }}
                        onClick={SubmitDialogClickHandler}
                        disabled={!isBook}
                      >
                        <Typography variant="h5" mb={1}>
                          ????????????
                        </Typography>
                      </Button>
                      <SubmitDialog
                        open={submitOpen}
                        setOpen={setSubmitOpen}
                        setMember={setMember}
                        point={point}
                        date={date}
                        houseId={house.id}
                      />
                    </Box>
                  ) : (
                    <Typography variant="h5" mb={1}>
                      ??????????????? ???????????? ???????????????.
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
                            {house.price}/???
                          </Typography>
                        </Container>
                      </Grid>
                    </Grid>

                    {member ? (
                      <Box>
                        <Divider />
                        <Stack spacing={1}>
                          <Box mt={2} mb={1}>
                            <Typography variant="h6">?????? ????????????</Typography>
                          </Box>
                          <Box>
                            <Stack direction={'row'} justifyContent="space-between">
                              <Typography variant="h7">????????? ?????????</Typography>
                              <Typography variant="h7">
                                {member.point}
                                <SavingsTwoToneIcon sx={{ fontSize: 'small' }} />
                              </Typography>
                            </Stack>
                          </Box>
                          <Box>
                            <Stack direction={'row'} justifyContent="space-between">
                              <Typography variant="h7">????????? ?????????</Typography>
                              <Typography variant="h7">
                                {point}
                                <SavingsTwoToneIcon sx={{ fontSize: 'small' }} />
                              </Typography>
                            </Stack>
                          </Box>
                          <Divider />
                          <Box>
                            <Stack direction={'row'} justifyContent="space-between">
                              <Typography variant="h7">??? ?????? ?????????</Typography>
                              {isBook ? (
                                <Typography variant="h7">
                                  {member.point - point}
                                  <SavingsTwoToneIcon sx={{ fontSize: 'small' }} />
                                </Typography>
                              ) : (
                                <Typography variant="h7" color={'red'}>
                                  ???????????? ???????????????.
                                </Typography>
                              )}
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
