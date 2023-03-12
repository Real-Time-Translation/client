import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  /** Invitation widget */
  companionInviteWrapper: {
    width: '100%',
    maxWidth: 640,
    maxHeight: 480,
    aspectRatio: '12 / 9',
    borderRadius: 16,
    background: '#3f434f',
    gap: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  companionInviteTitle: {
    color: '#ffffff',
  },
  companionInviteButton: {
    // textTransform: 'unset',
    // background: '#1f273d',
    // color: 'white',
    // marginTop: 8,
    // '&:hover': {
    //   backgroundColor: '#fff',
    //   color: '#3c52b2',
    // },
  },
  meetingId: {
    color: '#c7c7c7',
    marginTop: 32,
  },
});
