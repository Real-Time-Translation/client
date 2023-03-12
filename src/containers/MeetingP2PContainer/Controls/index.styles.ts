import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  controlsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 16,
  },
  endCallIcon: {
    marginLeft: 8,
    color: 'red',
  },
});
