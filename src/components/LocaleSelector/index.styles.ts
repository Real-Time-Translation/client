import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  wrapper: {
    width: 128,
  },
  select: {
    textAlign: 'start',
    '&:before': {
      borderColor: 'red',
    },
  },
});
