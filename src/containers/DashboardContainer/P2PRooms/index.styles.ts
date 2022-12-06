import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  roomCard: {
    flexBasis: 'auto',
    flexGrow: 1,
  },
  paperTitle: {
    color: 'white',
  },
  paperCardList: {
    color: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: 20,
    columnGap: 16,
    paddingTop: 2,
  },
});
