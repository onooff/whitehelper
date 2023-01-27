import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import HouseBookCard from '../components/card/HouseBookCard';
import { useOutletContext } from 'react-router-dom';
import { houses } from '../_mock/data';

export default function BookList() {
  const { member, setMember } = useOutletContext();
  const [renderTrigger, setRenderTrigger] = useState(true);

  return (
    <Box>
      <Container maxWidth="xl">
        <Container>
          {member.book.length !== 0 ? (
            member.book.map((b, index) => (
              <HouseBookCard
                key={index}
                startDate={new Date(b.startDate.seconds * 1000)}
                endDate={new Date(b.endDate.seconds * 1000)}
                location={houses[b.houseId - 1].locate}
                img={houses[b.houseId - 1].img[0]}
                id={b.houseId}
                bookId={index}
                member={member}
                setMember={setMember}
                setRenderTrigger={setRenderTrigger}
              />
            ))
          ) : (
            <Typography variant="h4" mt={3} textAlign={'center'}>
              예약된 숙소가 없습니다.
            </Typography>
          )}
        </Container>
      </Container>
    </Box>
  );
}
