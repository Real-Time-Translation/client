import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    flexGrow: 1,
    maxHeight: 300,
    paddingLeft: 16,
    paddingRight: 16,
  },
  speechContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speechIndicator: {
    width: '50%',
  },
  transcribeResultsContainer: {
    width: '50%',
    height: 300,
    display: 'flex',
    paddingTop: 32,
    justifyContent: 'center',
  },
});
