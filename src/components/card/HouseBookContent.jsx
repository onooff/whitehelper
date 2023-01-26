import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { convertDateKr, getDateDiff } from '../../utils/dateUtils';
export default function HouseBookContent({ startDate, endDate, location, id }) {
  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Stack p={2} gap={1}>
        <Stack direction={'row'} alignItems="flex-end" gap={1}>
          <Box>
            <CalendarMonthIcon />
          </Box>
          <Box>
            <Typography component="span" variant="h5">
              {getDateDiff([{ startDate: startDate, endDate: new Date() }])}일
            </Typography>
          </Box>
          <Box>
            <Typography component="span"> 남았습니다.</Typography>
          </Box>
        </Stack>
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
          onClick={() => {
            alert(id);
          }}
        >
          <Typography>예약 취소</Typography>
        </Button>
      </Container>
    </Box>
  );
}
