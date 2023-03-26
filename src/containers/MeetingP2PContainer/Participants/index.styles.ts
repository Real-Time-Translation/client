import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  videoSectionContainer: {
    flexGrow: 2,
    maxHeight: 400,
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
    justifyContent: 'center',
  },
  videoWrapper: {
    position: 'relative',
  },
  videoElement: {
    width: '100%',
    maxWidth: 480,
    height: 'auto',
    borderRadius: 16,
  },

  /** Translator */
  translatorWrapper: {
    flexGrow: 1,
    maxHeight: 200,
  },
});
