import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    marginTop: 8,
    width: 400,
    padding: 24,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    borderRadius: 12,
  },

  joinButton: {
    border: '1px solid',
    borderRadius: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
});
