import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { Divider, Typography } from '@mui/material';

export default function ReportDialog({ open, setOpen, hidden, setHidden }) {
  const saveHandler = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setOpen(false);
    }
  };
  const cancelHandler = () => {
    setOpen(false);
  };

  const messages = [
    '부정확하거나 틀린 정보가 있어요',
    '실제 숙소가 아닙니다',
    '사기 입니다',
    '불쾌합니다',
    '청결하거나 안전해 보이지 않아요',
  ];
  return (
    <Dialog fullWidth={true} maxWidth="xs" open={open} onClose={cancelHandler}>
      {hidden ? (
        <Box>
          <DialogTitle mt={4}>
            <Box>
              <Typography variant="h5">이 숙소를 신고하는 이유가 무엇인가요?</Typography>
            </Box>
            <Box>
              <Typography>이 내용은 호스트가 볼 수 없습니다.</Typography>
            </Box>
          </DialogTitle>
          <DialogContent>
            <RadioGroup
              name="tiers"
              sx={{ gap: 1, '& > div': { p: 1, flexDirection: 'row', gap: 2 } }}
              defaultValue="0"
            >
              {messages.map((message, index) => {
                return (
                  <Box key={index}>
                    <FormControlLabel
                      value={index}
                      control={<Radio />}
                      label={message}
                      labelPlacement="end"
                    />
                    <Divider />
                  </Box>
                );
              })}
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={saveHandler}>신고</Button>
            <Button onClick={cancelHandler}>취소</Button>
          </DialogActions>
        </Box>
      ) : (
        <Box>
          <DialogTitle mt={4}>
            <Box>
              <Typography variant="h5">신고해 주셔서 감사합니다.</Typography>
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              신고가 접수되었습니다. 소중한 시간을 내어 신고해주셔서 감사합니다. 회원님의 신고로
              화이트헬퍼가 더욱 안전해집니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={saveHandler}>확인</Button>
          </DialogActions>
        </Box>
      )}
    </Dialog>
  );
}
