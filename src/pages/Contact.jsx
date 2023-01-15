import { Grid, Box, Typography, Divider, Avatar, Button } from '@mui/material';
import { LocationOn, Call, Email, Message } from '@mui/icons-material';

function ContactElement({ Icon, title, content }) {
  return (
    <Grid item container xs={12} mb={'3rem'}>
      <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
        <Icon fontSize="large" />
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h5" sx={{ mb: '1rem' }}>
          {title}
        </Typography>
        <Typography variant="body1" mb="0.2rem" pl="0.3rem">
          {content}
        </Typography>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default function Contact() {
  return (
    <Grid container display="flex" justifyContent="space-evenly">
      <Grid item container xs={5}>
        <Grid item xs={12} mb="1rem" display="flex" justifyContent="center">
          <Box
            component="div"
            sx={{
              backgroundImage: "url('/mock/contact/contact1.svg')",
              backgroundSize: 'auto 100%',
              backgroundPosition: 'center top',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '16rem',
            }}
          ></Box>
        </Grid>
        <Grid item xs={12} mb="2rem">
          <Typography variant="h4">
            화이트헬퍼는 여러분들의 많은 관심과 협업 문의를 기다리고 있습니다.
          </Typography>
        </Grid>
        <ContactElement
          Icon={LocationOn}
          title="화이트헬퍼 주소"
          content="경상북도 영천시 서문길 99, 303호(교촌동, 엔젤빌라트)"
        />
        <ContactElement Icon={Call} title="화이트헬퍼 연락처" content="010-2944-9515" />
        <ContactElement Icon={Email} title="E-Mail" content="admin@whitehelper.com" />
        <Grid item container xs={12} mb={'3rem'}>
          <Grid item xs={1} display="flex" justifyContent="center" alignItems="center">
            <Message fontSize="large" />
          </Grid>
          <Grid item xs={11}>
            <Button variant="contained">
              <Avatar
                alt="admin"
                src="/mock/member/admin.jpg"
                sx={{ width: '1.5rem', height: '1.5rem' }}
              ></Avatar>
              <Typography variant="h5" sx={{ ml: '0.7rem' }}>
                채팅으로 문의하기
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          backgroundImage: "url('/mock/contact/contact2.jpg')",
          backgroundSize: 'auto 100%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Grid>
  );
}
