import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
