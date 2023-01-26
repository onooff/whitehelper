import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import HouseBookCard from '../components/card/HouseBookCard';
import { useOutletContext } from 'react-router-dom';
import firebaseInit from '../configs/firebaseInit';
import { getFirestore, getDocs, collection, orderBy, query } from 'firebase/firestore';

export default function BookList() {
  const { member, setMember } = useOutletContext();
  const [houses, setHouses] = useState([]);
  const app = firebaseInit();
  const db = getFirestore(app);
  useEffect(() => {
    getDocs(query(collection(db, 'house'), orderBy('id', 'asc'))).then((docSnap) => {
      const newData = docSnap.docs.map((doc) => ({ ...doc.data() }));
      setHouses(newData);
    });
  }, []);
  return (
    <Box>
      <Container maxWidth="xl">
        <Container>
          <Typography mt={5} variant="h4" textAlign={'center'}>
            예약된 숙소 목록
          </Typography>
        </Container>
        {member.book ? (
          member.book.map((b, index) => {
            <HouseBookCard
              startDate={b.startDate}
              endDate={b.endDate}
              location={houses[parseInt(b.id - 1)].locate}
              img={houses[parseInt(b.id - 1)].img[0]}
              id={b.houseId}
              bookId={index}
            />;
          })
        ) : (
          <Typography mt={5} variant="h4" textAlign={'center'}>
            예약된 숙소 목록
          </Typography>
        )}
      </Container>
    </Box>
  );
}
