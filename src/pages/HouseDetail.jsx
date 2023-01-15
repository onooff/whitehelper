import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import CustomDatePicker from "../components/detail/CustomDatePicker";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { houses } from "../_mock/data";
import { alpha, styled } from "@mui/material/styles";
import { Stack, TextField, Typography } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import CampaignIcon from "@mui/icons-material/Campaign";

const StyledProductImg = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "relative",
});
function convertDateKr(props) {
  return new Intl.DateTimeFormat("kr").format(props);
}
const getDateDiff = (state) => {
  const diffDate = state[0].endDate.getTime() - state[0].startDate.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};
const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function nextDay() {
  let res = new Date();
  res.setDate(res.getDate() + 1);
  return res;
}
export const HouseDetail = () => {
  const itemData = houses[0].img;
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: nextDay(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    setState(state);
  }, [state]);

  return (
    <Box>
      <Container maxWidth="xl">
        {/* 타이틀 */}
        <Container
          sx={{
            padding: "0 80px",
            marginTop: "24px",
          }}
        >
          <Typography variant="h4" mb={1}>
            전통기와 한옥 본채
          </Typography>
          <Grid
            container
            spacing={2}
            display="flex"
            align-items="flex-end"
            justifyContent="space-between"
            p={"0 auto"}
            mb={"4px"}
          >
            <Grid item xs="auto" alignItems={"flex-end"}>
              <Stack direction="row" spacing={1}>
                <Typography variant="h7">별점</Typography>
                <Typography variant="h7">슈퍼호스트</Typography>
                <Typography variant="h7">양평군, 경기도, 한국</Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto">
              <Stack direction="row" spacing={1}>
                <Button size="small" sx={{ color: "black" }}>
                  <Stack direction="row" spacing={1}>
                    <LogoutIcon
                      sx={{
                        fontSize: "medium",
                        transform: "rotate(-0.25turn)",
                      }}
                    />
                    <Typography
                      align="right"
                      variant="h7"
                      sx={{ textDecoration: "underline" }}
                    >
                      공유하기
                    </Typography>
                  </Stack>
                </Button>
                <Button size="small" sx={{ color: "black" }}>
                  <Stack direction="row" spacing={1}>
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: "medium",
                      }}
                    />
                    <Typography
                      align="right"
                      variant="h7"
                      sx={{ textDecoration: "underline" }}
                    >
                      저장
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        {/* 사진 */}
        <Container>
          <ImageList
            sx={{ width: "100%" }}
            variant="quilted"
            cols={4}
            rowHeight="calc(60vh - 64px)"
          >
            <ImageListItem key={1} cols={2} rows={2}>
              <img
                alt="1"
                {...srcset("https://picsum.photos/800/600?random=5", 2, 2)}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={1} cols={1} rows={1}>
              <img
                alt="1"
                {...srcset("https://picsum.photos/800/600?random=5")}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={1} cols={1} rows={1}>
              <img
                alt="1"
                {...srcset("https://picsum.photos/800/600?random=5")}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={1} cols={1} rows={1}>
              <img
                alt="1"
                {...srcset("https://picsum.photos/800/600?random=5")}
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem key={1} cols={1} rows={1}>
              <img
                alt="1"
                {...srcset("https://picsum.photos/800/600?random=5")}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Container>
        {/* 소개 및 예약페이지 */}
        <Container>
          <Box mt={8}>
            <Grid container justifyContent={"space-between"}>
              {/* 제목 및 사진 */}
              <Grid container item xs={7}>
                <Grid container item xs={12} mb={3}>
                  <Grid item xs={11}>
                    <Stack direction="column">
                      <Typography variant="h5" component="h2">
                        Fieldtrip 님이 호스팅하는 집 전체
                      </Typography>
                      <Stack direction="row">
                        최대 인원 8명침실 4개침대 4개욕실 5개
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs="1">
                    <Avatar sx={{ width: "100%", height: "100%" }} />
                  </Grid>
                </Grid>

                {/* 날짜 */}

                <Divider style={{ width: "100%" }} />

                <Box component="div" mt={4} sx={{ width: "100%" }}>
                  <CustomDatePicker state={state} setState={setState} />
                </Box>
              </Grid>
              {/* 예약페이지 */}
              <Grid item xs={4.5}>
                <Box
                  sx={{
                    border: "1px solid rgb(221, 221, 221)",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 16px",
                  }}
                >
                  {/* 가격 및 평점 */}
                  <Grid container display="flex" direction="column">
                    <Grid
                      container
                      item
                      display="flex"
                      justifyContent="space-between"
                      direction="row"
                      alignItems="flex-end"
                      mb={2}
                    >
                      <Grid item component="div" xs="auto">
                        <Typography component="span" variant="h4">
                          ₩348,392
                        </Typography>
                        <Typography component="span" variant="h7">
                          /박
                        </Typography>
                      </Grid>
                      <Grid item component="div" xs="auto">
                        <Stack direction="row" spacing={0.5}>
                          <StarRateIcon sx={{ fontSize: "medium" }} />
                          <Typography component="span" variant="h7">
                            4.1
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                    {/* 체크인 체크아웃 */}
                    <Box
                      component="div"
                      mb={2}
                      sx={{
                        borderRadius: "1",
                        border: "2",
                      }}
                    >
                      <Stack direction="row">
                        <RedditTextField
                          label="체크인"
                          value={convertDateKr(state[0].startDate)}
                          id="reddit-input"
                          variant="filled"
                          style={{ marginTop: 11, width: "100%" }}
                        />
                        <RedditTextField
                          label="체크아웃"
                          value={convertDateKr(state[0].endDate)}
                          id="reddit-input"
                          variant="filled"
                          style={{ marginTop: 11, width: "100%" }}
                        />
                      </Stack>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      mt={11}
                    >
                      <Typography m={1} variant="h7" align="center">
                        예약하기
                      </Typography>
                    </Button>
                    <Typography mt={2} mb={2} variant="h7" align="center">
                      예약 확정 전에는 포인트가 청구되지 않습니다.
                    </Typography>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography mt={2} mb={2} variant="h7" align="center">
                        얼마 x {getDateDiff(state)}박
                      </Typography>
                      <Typography mt={2} mb={2} variant="h7" align="center">
                        값
                      </Typography>
                    </Stack>
                    <Divider style={{ width: "100%" }} />
                    <Stack direction="row" justifyContent="space-between">
                      <Typography mt={2} mb={2} variant="h7">
                        총합계
                      </Typography>
                      <Typography mt={2} mb={2} variant="h7">
                        값
                      </Typography>
                    </Stack>
                  </Grid>
                </Box>
                <Box mt={3} textAlign="center">
                  <Button>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center !important"
                    >
                      <CampaignIcon sx={{ fontSize: "medium" }} />
                      <Typography
                        component="span"
                        variant="h7"
                        sx={{ textDecoration: "underline" }}
                      >
                        숙소 신고하기
                      </Typography>
                    </Stack>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};
