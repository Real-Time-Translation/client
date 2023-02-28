import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    marginTop: 24,
    display: 'grid',
    gap: 24,
    gridTemplateColumns: '3fr 1fr',
  },
  roomsWrapper: {
    backgroundColor: '#323940',
    borderRadius: 12,
    boxShadow: 12,
    padding: 18,
  },
  leftPart: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  usersWrapper: {
    backgroundColor: '#323940',
    borderRadius: 12,
    boxShadow: 12,
    padding: 18,
  },
});
