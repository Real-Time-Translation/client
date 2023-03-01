import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    background: 'rgb(43, 46, 60, 0.7)',
    borderRadius: 12,
    padding: 8,
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      background: '#191928',
    },
  },
  topLeftCorner: {
    borderTopLeftRadius: 32,
  },
  bottomLeftCorner: {
    borderBottomLeftRadius: 32,
  },
  topRightCorner: {
    borderTopRightRadius: 32,
  },
  bottomRightCorner: {
    borderBottomRightRadius: 32,
  },
  titleIcon: {
    marginTop: 16,
    fontSize: 52,
  },
  subtitle: {
    marginTop: 8,
    color: '#91919b',
  },
});
