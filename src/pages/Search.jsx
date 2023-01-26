import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import { houses } from '../_mock/data';
import HouseCard from '../components/card/HouseCard';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

function Search() {
  const { member, setMember } = useOutletContext();
  const keyword = useParams().keyword.trim();
  const filteredHouses = houses.filter((house) => house.locate.includes(keyword));

  return (
    <Box p={'0 80px'} m={'10px'}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredHouses.length === 0 ? (
          <Grid item xs={12} mt="10rem" display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5">'{keyword}'에 대한 검색 결과가 존재하지 않습니다.</Typography>
          </Grid>
        ) : (
          <>
            <Grid item xs={12}>
              <Typography
                mt="2rem"
                mb="1rem"
                variant="h5"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                '{keyword}'에 대한 검색 결과가 {filteredHouses.length}건 조회되었습니다.
              </Typography>
            </Grid>
            {filteredHouses.map((item) => (
              <Grid item key={item.id} xs={12} sm={4} md={3}>
                <HouseCard
                  id={item.id}
                  img={item.img}
                  rate={item.rate}
                  locate={item.locate}
                  price={item.price}
                  member={member}
                  setMember={setMember}
                />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
}

export default Search;
