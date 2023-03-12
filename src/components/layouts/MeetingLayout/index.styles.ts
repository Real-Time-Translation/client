import { createUseStyles } from 'react-jss';
import backgroundImage from '@assets/images/dashboardBackground.png';

export const useStyles = createUseStyles({
  root: {
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)),
    url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
});
