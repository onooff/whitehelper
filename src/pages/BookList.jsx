import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import HouseBookCard from '../components/card/HouseBookCard';

export default function BookList() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Container>
          <Typography mt={5} variant="h4" textAlign={'center'}>
            예약된 숙소 목록
          </Typography>
        </Container>

        <HouseBookCard
          startDate={'2월 3일'}
          endDate={'3월 4일'}
          location={'대구광역시 동구 율하동'}
          img={'/mock/house/1/1.jpg'}
          id={1}
        />
      </Container>
    </Box>
  );
}
