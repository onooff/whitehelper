import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Container } from '@mui/system';
import HouseBookImg from './HouseBookImg';
import HouseBookContent from './HouseBookContent';

export default function HouseBookCard({ startDate, endDate, location, img, id, bookId }) {
  return (
    <Container
      sx={{
        padding: '0 80px',
        marginTop: '24px',
      }}
    >
      <Box component="div" sx={{ p: '10px 50px' }}>
        <Paper
          elevation={3}
          sx={{
            margin: 2,
            padding: 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <HouseBookImg img={img} alt={id} />
            </Grid>
            <Grid item xs={9}>
              <HouseBookContent
                startDate={startDate}
                endDate={endDate}
                location={location}
                id={id}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
