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

  /** Todo: вынести в компонент */
  widgetWrapper: {
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
  topLeftWidget: {
    borderTopLeftRadius: 32,
  },
  bottomLeftWidget: {
    borderBottomLeftRadius: 32,
  },
  topRightWidget: {
    borderTopRightRadius: 32,
  },
  bottomRightWidget: {
    borderBottomRightRadius: 32,
  },
  titleIcon: {
    marginTop: 16,
    fontSize: 52,
  },
  widgetSubtitle: {
    marginTop: 8,
    color: '#91919b',
  },
});
