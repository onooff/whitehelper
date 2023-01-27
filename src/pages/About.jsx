import { Grid, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <>
      <Grid container sx={{ mb: '1rem' }}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h1" sx={{ fontFamily: 'Open Sans' }}>
            For Runaway Teenagers.
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Typography lineHeight={'170%'} variant="h2">
            보호에 취약한 가출 청소년의 내일을 위해.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mb: '1rem' }}>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          {/* <Box
            component="iframe"
            width="1366px"
            height="768px"
            src="https://www.youtube.com/embed/u31qwQUeGuM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Box> */}
          <Box
            component="video"
            src="/WhitehelperIntro.mp4"
            width="1366px"
            height="768px"
            controls
            muted
            autoPlay
            loop
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        sx={{
          mb: '1rem',
          p: '1rem',
          backgroundImage: "url('/mock/about/about1.jpg')",
          backgroundSize: 'cover',
          minHeight: '60rem',
        }}
      >
        <Grid item xs={7} />
        <Grid
          item
          container
          xs={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: 'rgba(0, 0, 0, 50%)',
            color: 'white',
            minHeight: '50rem',
            boxShadow: ' 0 0 15px 0 rgba(0 0 0 / 50%)',
            p: '2rem',
          }}
        >
          <Grid item xs={12} />
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography lineHeight={'170%'} variant="h3">
              2020년 기준, 가출 청소년 약 12만명.
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography lineHeight={'170%'} variant="h5">
              그 중 청소년 쉼터 입소 청소년은 2만 400명 수준으로 쉼터의 수가 절대적으로 부족한
              상황입니다. 사회에 내던져진 가출 청소년은 성폭행, 구타 및 가혹행위, 굶주림 등에
              노출되며 헬퍼(가출 청소년을 돕는 사람)를 가장한 악성 헬퍼에게 당해 어른에 대한 신뢰를
              잃어가는 등 악순환에 시달립니다.
            </Typography>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Typography lineHeight={'170%'} variant="h4">
              화이트 헬퍼는 따뜻해야 할 보금자리로부터 도망칠 수 밖에 없었던 청소년들을 안전하게
              보호하고 건강한 사회 구성원으로 성장할 수 있는 울타리를 만들어 갑니다.
            </Typography>
          </Grid>
          <Grid item xs={12} />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        sx={{
          p: '1rem',
          backgroundImage: "url('/mock/about/about2.jpg')",
          backgroundSize: 'cover',
          height: '60rem',
        }}
      >
        <Grid
          item
          container
          xs={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: 'rgba(0, 0, 0, 50%)',
            color: 'white',
            minHeight: '50rem',
            boxShadow: ' 0 0 15px 0 rgba(0 0 0 / 50%)',
            p: '2rem',
          }}
        >
          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="h3">
              세상의 모든 가출청소년을 위해
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="h5">
              화이트헬퍼는 가정으로부터, 사회로부터 소외된 가출 청소년들을 위한 기업입니다.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="body1">
              기존에 가출청소년에게 도움을 주는 사람들을 헬퍼(HELPER)라고 불렀습니다. 하지만 이러한
              도움의 손길을 악용하여 가출 청소년을 불법 활동에 동참시키거나 성폭력에 노출시키는 악성
              헬퍼에 대한 사회적 문제가 커지고 있습니다. 선의에 의해 가출청소년들을 돕는 사람들마저
              악성 헬퍼의 이미지를 벗어나기 어렵고 가출청소년을 위한 공통의 서비스 플랫폼의 부재는
              가출 청소년들을 더욱 가혹한 환경에 놓이게 하였습니다. 화이트헬퍼는 가출 청소년들이
              다시 사회에서 선한 영향력을 나눌 수 있는 구성원으로 발돋움할 수 있도록 다양한 서비스를
              제공하고자 합니다.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="h5">
              가출 청소년에게 주거공간과 일자리를 제공해주는 문화를 만들고 싶습니다.
            </Typography>
            <Typography lineHeight={'170%'} variant="body1">
              사회적 공헌이 비즈니스에 도움이 되는 미덕의 문화는 점차 퍼져나가고 있습니다. 가출
              청소년을 돕는 것이 사회적 미덕이고 내 비즈니스에 도움이 될 수 있다는 것을 문화화 하여
              더 많은 공간에서 안전하게 휴식하고 일할 수 있는 공간을 만들고 싶습니다.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="h5">
              공공 청소년 쉼터는 턱없이 부족합니다.
            </Typography>
            <Typography lineHeight={'170%'} variant="body1">
              공공 청소년 쉼터는 국내 135개에 불과하며 서울 중심으로 분포되어 있습니다. 더불어 공공
              쉼터의 최종 목표를 가정으로의 복귀로 정하고 있어 가정폭력을 피하여 도망친 청소년을
              다시 폭력이 있는 공간으로 밀어 넣고 있습니다. 가출 청소년이 도움 받을 만한 서비스도
              없는 상태입니다.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="h5">
              가출 청소년을 돕는 것은 홍보효과가 있고 매출에 도움이 됩니다.
            </Typography>
            <Typography lineHeight={'170%'} variant="body1">
              공공 청소년 쉼터의 공간적, 제도적 한계를 벗어나 민간 영역에서 숙소 제공과 청소 업무를
              통해 소액의 경제활동을 제공함으로써 숙소에 대한 홍보, 청소 관리 비용의 절감, 12만
              청소년 대상의 가성비 높은 타게팅 광고가 가능합니다.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography lineHeight={'170%'} variant="h5">
              가출 유경험자의 가장 진솔하고 확실한 경험으로 만들어진 서비스입니다.
            </Typography>
            <Typography lineHeight={'170%'} variant="body1">
              가출 경험과 악의적인 헬퍼를 만났던 실제 경험을 바탕으로 가출 청소년이 힘들어하는
              부분과 필요한 부분을 적극 반영하여 서비스를 확대해 갈 것입니다.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5} />
      </Grid>
    </>
  );
}
