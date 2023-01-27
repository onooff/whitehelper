import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { getFirestore, doc, updateDoc, Timestamp } from 'firebase/firestore';
import firebaseInit from '../../configs/firebaseInit';
import { useNavigate } from 'react-router-dom';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function SubmitDialog({ open, setOpen, setMember, point, date, houseId }) {
  const navigate = useNavigate();

  const closeHandler = () => {
    setOpen(false);
  };
  const saveHandler = () => {
    const app = firebaseInit();
    const db = getFirestore(app);
    setMember((m) => {
      m.point = m.point - point;
      m.book.push({
        startDate: Timestamp.fromDate(date.startDate),
        endDate: Timestamp.fromDate(date.endDate),
        houseId,
      });
      updateDoc(doc(db, 'member', m.uid), { point: m.point, book: Array.from(m.book) })
        .then(() => {
          setOpen(false);
          navigate('/book/complete');
        })
        .catch((e) => {
          console.log(e);
        });
      return m;
    });
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeHandler}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          예약 확인
        </DialogTitle>
        <DialogContent>
          <DialogContentText>예약이 진행 됩니다. 계속 하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={saveHandler}>확인</Button>
          <Button onClick={closeHandler}>취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
