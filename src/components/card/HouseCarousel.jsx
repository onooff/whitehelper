import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { styled } from "@mui/material/styles";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Box from "@mui/material/Box";

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
  position: "relative",
});

export default function HouseCarousel({ img }) {
  const [isHovering, setIsHovering] = useState(true);
  const [isLike, setLike] = useState(false);
  const iconClickHandler = () => {
    setLike((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
      onMouseOver={() => setIsHovering(false)}
      onMouseOut={() => setIsHovering(true)}
    >
      <Carousel
        height={"273px"}
        autoPlay={false}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            marginTop: "-30px",
            position: "relative",
            padding: "10px",
          },
        }}
        animation="slide"
        cycleNavigation={false}
        navButtonsProps={{
          style: {
            color: "black",
            backgroundColor: "white",
          },
        }}
        navButtonsAlwaysVisible={!isHovering}
      >
        {img.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <IconButton
        onClick={iconClickHandler}
        sx={{
          zIndex: 9,
          top: 10,
          right: 10,
          position: "absolute",
          color: "white",
        }}
      >
        {isLike ? <FavoriteIcon color="secondary" /> : <FavoriteTwoToneIcon />}
      </IconButton>
    </Box>
  );
}

function Item(props) {
  return (
    <>
      <StyledProductImg src={props.item} loading="eager" />
    </>
  );
}
