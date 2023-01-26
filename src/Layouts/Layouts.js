import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
import { customTheme } from "../configs/customTheme";
import Header from "./Header";
import Footer from "./Footer";
import firebaseInit from "../configs/firebaseInit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function Layouts() {
  const [footerHeight, setFooterHeight] = useState(0);
  const [member, setMember] = useState(null);

  useEffect(() => {
    if (!member) {
      const app = firebaseInit();
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const db = getFirestore(app);
          getDoc(doc(db, 'member', uid)).then((docSnap) => {
            const m = docSnap.data();
            m.favorite = new Set(m.favorite);
            m.uid = uid;
            setMember(m);
            // alert("현재 로그인 " + m.email);
          });
        }
        // else {
        //   alert("낫 로그인");
        // }
      });
    }
  })

  return (
    <ThemeProvider theme={customTheme}>
      <Header member={member} setMember={setMember} />
      <Box component="main" sx={{ mt: "0.5rem", mb: `${footerHeight + 0.5}rem` }} >
        <Outlet context={{ member, setMember }} />
      </Box>
      <Footer setFooterHeight={setFooterHeight} />
    </ThemeProvider>
  );
}
