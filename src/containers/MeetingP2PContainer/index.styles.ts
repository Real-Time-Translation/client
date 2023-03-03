import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  videoSectionContainer: {
    flexGrow: 3,
    maxHeight: 740,
    background: 'rgba(48,48,48, 0.63)',
    margin: 16,
    borderRadius: 16,
    display: 'flex',
    justifyContent: 'center',
    gap: 32,
    padding: 16,
  },
  viewItem: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  companionInviteWrapper: {
    width: '100%',
    maxWidth: 780,
    aspectRatio: '12 / 9',
    borderRadius: 16,
    background: '#3f434f',
  },
  videoElement: {
    width: '100%',
    maxWidth: 780,
    height: 'auto',
    borderRadius: 16,
  },

  translatorWrapper: {
    flexGrow: 2,
  },
});
