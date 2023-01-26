import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { RedditTextField } from '../textfield/RedditTextField';
import { convertDateKr, getDateDiff } from '../../utils/dateUtils';
import CustomDatePicker from '../detail/CustomDatePicker';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DateDialog({ state, setState, open, setOpen }) {
  const [tempDate, setTempDate] = useState([
    {
      startDate: state.startDate,
      endDate: state.endDate,
      key: 'selection',
    },
  ]);
  const submitHandler = () => {
    setState(tempDate[0]);
    closeHandler();
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={closeHandler}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="sm"
        fullWidth={true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={closeHandler}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box mt={5}>
              <Typography variant="h4">{getDateDiff(tempDate)}박</Typography>
            </Box>
            <Box>
              <Stack direction="row">
                <RedditTextField
                  label="체크인"
                  value={convertDateKr(tempDate[0].startDate)}
                  id="reddit-input"
                  variant="filled"
                  style={{ marginTop: 30, width: '100%' }}
                />
                <RedditTextField
                  label="체크아웃"
                  value={convertDateKr(tempDate[0].endDate)}
                  id="reddit-input"
                  variant="filled"
                  style={{ marginTop: 30, width: '100%' }}
                />
              </Stack>{' '}
            </Box>
          </Stack>
        </BootstrapDialogTitle>
        <Box>
          <DialogContent>
            <CustomDatePicker state={tempDate} setState={setTempDate} />
          </DialogContent>
        </Box>
        <DialogActions>
          <Button autoFocus onClick={submitHandler}>
            수정하기
          </Button>
          <Button autoFocus onClick={closeHandler}>
            취소
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
