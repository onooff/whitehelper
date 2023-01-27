import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { convertDateKr, getDateDiff } from '../../utils/dateUtils';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import firebaseInit from '../../configs/firebaseInit';

export default function HouseBookContent({
  setRenderTrigger,
  startDate,
  endDate,
  location,
  bookId,
  member,
  setMember,
}) {
  const app = firebaseInit();
  const db = getFirestore(app);

  const deleteClickHandler = () => {
    setMember((m) => {
      m.book.splice(bookId, 1);
      updateDoc(doc(db, 'member', m.uid), { book: m.book });
      return m;
    });
    setRenderTrigger((prev) => !prev);
  };
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Stack p={2} gap={1}>
        {getDateDiff([{ startDate: new Date(), endDate: startDate }]) === 0 ? (
          <Box>
            <Stack direction={'row'} alignItems="flex-end" gap={1}>
              <Box>
                <CalendarMonthIcon />
              </Box>
              <Box>
                <Typography component="span" variant="h5" color="red">
                  오늘
                </Typography>
              </Box>
              <Box>
                <Typography component="span"> 입실입니다.</Typography>
              </Box>
            </Stack>
          </Box>
        ) : getDateDiff([{ startDate: new Date(), endDate: startDate }]) > 0 ? (
          <Box>
            <Stack direction={'row'} alignItems="flex-end" gap={1}>
              <Box>
                <CalendarMonthIcon />
              </Box>
              <Box>
                <Typography component="span" variant="h5">
                  {getDateDiff([{ startDate: new Date(), endDate: startDate }])}일
                </Typography>
              </Box>
              <Box>
                <Typography component="span"> 남았습니다.</Typography>
              </Box>
            </Stack>
          </Box>
        ) : (
          <Box>
            <Stack direction={'row'} alignItems="flex-end" gap={1}>
              <Box>
                <CalendarMonthIcon />
              </Box>
              <Box>
                <Typography component="span" variant="h5">
                  기간이 지났습니다.
                </Typography>
              </Box>
            </Stack>
          </Box>
        )}
        <Divider />

        <Container>
          <Typography variant="h6">{location}</Typography>
        </Container>
        <Box pl={2}>
          <Typography>
            {convertDateKr(startDate)} ~ {convertDateKr(endDate)}
          </Typography>
        </Box>
      </Stack>
      <Container>
        <Button
          mt={2}
          variant="contained"
          sx={{
            width: '100%',
            height: '100%',
          }}
          onClick={deleteClickHandler}
        >
          <Typography>예약 취소</Typography>
        </Button>
      </Container>
    </Box>
  );
}
