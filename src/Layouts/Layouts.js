import { useState } from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

export default function Layouts({ chlidren }) {
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <>
      <Header/>
      <Box component="main" sx={{mb:`${footerHeight}rem`}}>
        {chlidren}
      </Box>
      <Footer setFooterHeight={setFooterHeight}/>
    </>
  );
}
