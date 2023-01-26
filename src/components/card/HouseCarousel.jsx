import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/material/styles';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import firebaseInit from '../../configs/firebaseInit';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  position: 'relative',
});
const app = firebaseInit();
const db = getFirestore(app);

export default function HouseCarousel({ img, id, member, setMember }) {
  const [isHovering, setIsHovering] = useState(true);
  const [renderTrigger, setRenderTrigger] = useState(true);
  const iconClickHandler = () => {
    setMember((m) => {
      if (m.favorite.has(id)) {
        m.favorite.delete(id);
      } else {
        m.favorite.add(id);
      }
      updateDoc(doc(db, 'member', m.uid), { favorite: Array.from(m.favorite) });
      return m;
    });
    setRenderTrigger((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
      onMouseOver={() => setIsHovering(false)}
      onMouseOut={() => setIsHovering(true)}
    >
      <Carousel
        height={'273px'}
        autoPlay={false}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            marginTop: '-30px',
            position: 'relative',
            padding: '10px',
          },
        }}
        animation="slide"
        cycleNavigation={false}
        navButtonsProps={{
          style: {
            color: 'black',
            backgroundColor: 'white',
          },
        }}
        navButtonsAlwaysVisible={!isHovering}
      >
        {img.map((item, i) => (
          <Item key={i} item={item} id={id} />
        ))}
      </Carousel>
      <IconButton
        onClick={member ? iconClickHandler : null}
        sx={{
          zIndex: 9,
          top: 10,
          right: 10,
          position: 'absolute',
          color: 'white',
        }}
      >
        {member ? (
          member.favorite.has(id) ? (
            <FavoriteIcon sx={{ color: 'hotpink' }} />
          ) : (
            <FavoriteTwoToneIcon />
          )
        ) : (
          <FavoriteTwoToneIcon />
        )}
      </IconButton>
    </Box>
  );
}

function Item({ item, id }) {
  return (
    <>
      <Link to={`/detail/${id}`}>
        <StyledProductImg src={item} loading="eager" />
      </Link>
    </>
  );
}
