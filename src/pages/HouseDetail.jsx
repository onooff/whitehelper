import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import CustomDatePicker from '../components/detail/CustomDatePicker';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { houses } from '../_mock/data';
import { memberList } from '../_mock/member';
import { Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import CampaignIcon from '@mui/icons-material/Campaign';
import SavingsTwoToneIcon from '@mui/icons-material/SavingsTwoTone';
import { addDays } from 'date-fns';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { RedditTextField } from '../components/textfield/RedditTextField';
import { convertDateKr, convertQueryDate, getDateDiff } from '../utils/dateUtils';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const arr = [2, 1, 1, 1, 1];
export const HouseDetail = () => {
  const param = useParams();
  const id = parseInt(param.id) - 1;
  const member = memberList[id % 6];
  const [house, setHouse] = useState(houses[id]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
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
            padding: '0 80px',
            marginTop: '24px',
          }}
        >
          <Typography variant="h4" mb={1}>
            {house.locate}
          </Typography>
          <Grid
            container
            spacing={2}
            display="flex"
            align-items="flex-end"
            justifyContent="space-between"
            p={'0 auto'}
            mb={'4px'}
          >
            <Grid item xs="auto" alignItems={'flex-end'}>
              <Stack direction="row" spacing={1}>
                <Typography variant="h7">
                  <StarRateIcon sx={{ fontSize: 'medium' }} />
                  {house.rate}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto">
              <Stack direction="row" spacing={1}>
                <Button size="small" sx={{ color: 'black' }}>
                  <Stack direction="row" spacing={1}>
                    <LogoutIcon
                      sx={{
                        fontSize: 'medium',
                        transform: 'rotate(-0.25turn)',
                      }}
                    />
                    <Typography align="right" variant="h7" sx={{ textDecoration: 'underline' }}>
                      공유하기
                    </Typography>
                  </Stack>
                </Button>
                <Button size="small" sx={{ color: 'black' }}>
                  <Stack direction="row" spacing={1}>
                    <FavoriteBorderIcon
                      sx={{
                        fontSize: 'medium',
                      }}
                    />
                    <Typography align="right" variant="h7" sx={{ textDecoration: 'underline' }}>
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
          <ImageList sx={{ width: '100%' }} variant="quilted" cols={4}>
            {arr.map((size, index) => (
              <ImageListItem key={index} cols={size} rows={size}>
                <img alt={index} {...srcset(house.img[index], size, size)} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
        {/* 소개 및 예약페이지 */}
        <Container>
          <Box mt={8}>
            <Grid container justifyContent={'space-between'}>
              {/* 제목 및 사진 */}
              <Grid container item xs={7}>
                <Grid container item xs={12} mb={3}>
                  <Grid item xs={11}>
                    <Stack direction="column">
                      <Typography variant="h5" component="h2">
                        {member.nickname} 님이 호스팅하는 집 전체
                      </Typography>
                      <Stack direction="row">최대 인원 : {house.person} 명</Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={1}>
                    <Avatar
                      sx={{ width: '100%', height: '100%' }}
                      src={member.profileImage}
                      alt={member.nickname}
                    />
                  </Grid>
                </Grid>

                {/* 날짜 */}

                <Divider style={{ width: '100%' }} />

                <Box component="div" mt={4} sx={{ width: '100%' }}>
                  <CustomDatePicker state={state} setState={setState} />
                </Box>
              </Grid>
              {/* 예약페이지 */}
              <Grid item xs={4.5}>
                <Box
                  sx={{
                    border: '1px solid rgb(221, 221, 221)',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 6px 16px',
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
                        <SavingsTwoToneIcon />
                        <Typography component="span" variant="h4">
                          {house.price}
                        </Typography>
                        <Typography component="span" variant="h7">
                          /박
                        </Typography>
                      </Grid>
                      <Grid item component="div" xs="auto">
                        <Stack direction="row" spacing={0.5}>
                          <StarRateIcon sx={{ fontSize: 'medium' }} />
                          <Typography component="span" variant="h7">
                            {house.rate}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                    {/* 체크인 체크아웃 */}
                    <Box
                      component="div"
                      mb={2}
                      sx={{
                        borderRadius: '1',
                        border: '2',
                      }}
                    >
                      <Stack direction="row">
                        <RedditTextField
                          label="체크인"
                          value={convertDateKr(state[0].startDate)}
                          id="reddit-input"
                          variant="filled"
                          style={{ marginTop: 11, width: '100%' }}
                        />
                        <RedditTextField
                          label="체크아웃"
                          value={convertDateKr(state[0].endDate)}
                          id="reddit-input"
                          variant="filled"
                          style={{ marginTop: 11, width: '100%' }}
                        />
                      </Stack>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        width: '100%',
                        height: '100%',
                      }}
                      mt={11}
                      LinkComponent={Link}
                      to={`/book?id=${id}&startDate=${convertQueryDate(
                        state[0].startDate
                      )}&endDate=${convertQueryDate(state[0].endDate)}`}
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
                        {house.price} x {getDateDiff(state)}박
                      </Typography>
                      <Typography mt={2} mb={2} variant="h7" align="center">
                        <SavingsTwoToneIcon sx={{ fontSize: 'medium' }} />
                        {house.price * getDateDiff(state)}
                      </Typography>
                    </Stack>
                    <Divider style={{ width: '100%' }} />
                    <Stack direction="row" justifyContent="space-between">
                      <Typography mt={2} mb={2} variant="h7">
                        총합계
                      </Typography>
                      <Typography mt={2} mb={2} variant="h7">
                        <SavingsTwoToneIcon sx={{ fontSize: 'medium' }} />
                        {house.price * getDateDiff(state)}
                      </Typography>
                    </Stack>
                  </Grid>
                </Box>
                <Box mt={3} textAlign="center">
                  <Button>
                    <Stack direction="row" spacing={1} alignItems="center !important">
                      <CampaignIcon sx={{ fontSize: 'medium' }} />
                      <Typography
                        component="span"
                        variant="h7"
                        sx={{ textDecoration: 'underline' }}
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
