import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    height: '100%',
  },
  actionWidgetsWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /** Widgets */
  actionWidgetsContainer: {
    padding: 8,
    display: 'grid',
    gridTemplateRows: '180px 180px',
    gridTemplateColumns: '320px 320px',
    rowGap: 16,
    columnGap: 16,
  },
});
