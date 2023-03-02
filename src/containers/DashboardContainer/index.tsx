import React, { FC, useContext } from 'react';
import { DashboardLayout } from '@components/layouts/DashboardLayout';
import { useStyles } from './index.styles';
import { Header } from '@components/layouts/DashboardLayout/Header';
import { Footer } from '@components/layouts/DashboardLayout/Footer';
import { WidgetCard } from '@components/WidgetCard';
import { WidgetCardCornerRadiusDirection } from '@components/WidgetCard/interfaces';
import CastIcon from '@mui/icons-material/Cast';
import { AdminPanelSettingsOutlined, FindInPage } from '@mui/icons-material';
import { LanguageContext } from '@modules/LanguageProvider/context';
import { LanguageWidget } from '@containers/DashboardContainer/LanguageWidget';
import { useCreateMeeting } from '@containers/DashboardContainer/hooks/useCreateMeeting';
import { CircularProgress } from '@mui/material';

export const DashboardContainer: FC = () => {
  const classes = useStyles();

  const { currentLanguage, onChangeLanguage } = useContext(LanguageContext);

  /** Meeting creation */
  const { createMeeting, loading: createMeetingLoading } = useCreateMeeting();

  return (
    <DashboardLayout header={<Header />} footer={<Footer />}>
      <div className={classes.root}>
        <div className={classes.actionWidgetsWrapper}>
          {createMeetingLoading ? (
            <CircularProgress sx={{ color: 'white' }} />
          ) : (
            <div className={classes.actionWidgetsContainer}>
              <WidgetCard
                onAreaClick={createMeeting}
                cornerRadiusDirection={WidgetCardCornerRadiusDirection.TopLeft}
                title={'New video meeting'}
                subtitle={'Create meeting and send code to others'}
                icon={CastIcon}
              />
              <WidgetCard
                cornerRadiusDirection={WidgetCardCornerRadiusDirection.TopRight}
                title={'Settings'}
                subtitle={'Your preferences'}
                icon={AdminPanelSettingsOutlined}
              />
              <WidgetCard
                cornerRadiusDirection={
                  WidgetCardCornerRadiusDirection.BottomLeft
                }
                title={'Join meeting'}
                subtitle={'If you have the code, click and paste it'}
                icon={FindInPage}
              />
              <LanguageWidget
                currentLanguage={currentLanguage}
                onChangeLanguage={onChangeLanguage}
              />
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};
