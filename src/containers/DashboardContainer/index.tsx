import React, { FC } from 'react';
import { DashboardLayout } from '@components/layouts/DashboardLayout';
import { useStyles } from './index.styles';
import classNames from 'classnames';
import { Typography } from '@mui/material';
import CastIcon from '@mui/icons-material/Cast';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PublicIcon from '@mui/icons-material/Public';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Header } from '@components/layouts/DashboardLayout/Header';
import { Footer } from '@components/layouts/DashboardLayout/Footer';

/**
 * Todo вынести карточку в отдельный компонент
 * Прокинуть туда также пропс с бордер радиус
 * сделать мапу которая выдает класс и енам радиуса
 * хранить его в компоненте карточки в интерфейсах
 * */

export const DashboardContainer: FC = () => {
  const classes = useStyles();

  return (
    <DashboardLayout header={<Header />} footer={<Footer />}>
      <div className={classes.root}>
        <div className={classes.actionWidgetsWrapper}>
          <div className={classes.actionWidgetsContainer}>
            <div className={classNames(classes.widgetWrapper, classes.topLeftWidget)}>
              <CastIcon className={classes.titleIcon} />
              <Typography fontWeight={600}>New video meeting</Typography>
              <Typography variant="subtitle2" className={classes.widgetSubtitle}>
                Create meeting and send code to others
              </Typography>
            </div>
            <div className={classNames(classes.widgetWrapper, classes.topRightWidget)}>
              <AdminPanelSettingsIcon className={classes.titleIcon} />
              <Typography fontWeight={600}>Settings</Typography>
              <Typography variant="subtitle2" className={classes.widgetSubtitle}>
                Your preferences
              </Typography>
            </div>
            <div className={classNames(classes.widgetWrapper, classes.bottomLeftWidget)}>
              <FindInPageIcon className={classes.titleIcon} />
              <Typography fontWeight={600}>Join meeting</Typography>
              <Typography variant="subtitle2" className={classes.widgetSubtitle}>
                If you have the code, click and paste it
              </Typography>
            </div>
            <div className={classNames(classes.widgetWrapper, classes.bottomRightWidget)}>
              <PublicIcon className={classes.titleIcon} />
              <Typography fontWeight={600}>Choose language</Typography>
              <Typography variant="subtitle2" className={classes.widgetSubtitle}>
                Configure the language to translate
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
