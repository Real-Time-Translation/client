import { createUseStyles } from 'react-jss';
import backgroundImage from '@assets/images/dashboardBackground.png';

export const useStyles = createUseStyles({
  root: {
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flexGrow: 1,
    background: 'transparent',
  },
});
