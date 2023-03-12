import React, { FC } from 'react';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useStyles } from './index.styles';
import { InviteWidgetProps } from './interfaces';

export const InviteWidget: FC<InviteWidgetProps> = ({ meetingId }) => {
  const classes = useStyles();
  const [toastOpen, setToastOpen] = React.useState(false);

  const copyContent = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setToastOpen(true);
    });
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  return (
    <div className={classes.companionInviteWrapper}>
      <Typography className={classes.companionInviteTitle} variant="h5">
        The meeting is ready
      </Typography>
      <Button
        size="small"
        onClick={copyContent}
        variant="contained"
        className={classes.companionInviteButton}
        startIcon={<ContentCopyIcon />}
      >
        Copy invitation link
      </Button>
      <Typography variant="subtitle2" className={classes.meetingId}>
        Meeting ID: {meetingId}
      </Typography>
      <Snackbar open={toastOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Link copied!
        </Alert>
      </Snackbar>
    </div>
  );
};
