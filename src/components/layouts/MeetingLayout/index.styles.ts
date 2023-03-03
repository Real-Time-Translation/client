import { createUseStyles } from 'react-jss';
import backgroundImage from '@assets/images/dashboardBackground.png';

export const useStyles = createUseStyles({
  root: {
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    filter: 'brightness(65%)',
    backgroundSize: 'cover',
  },
});
