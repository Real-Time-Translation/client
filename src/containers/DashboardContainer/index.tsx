import React, { FC } from 'react';
import { DashboardLayout } from '@components/layouts/DashboardLayout';
import { useStyles } from './index.styles';
import { Header } from '@components/layouts/DashboardLayout/Header';
import { Footer } from '@components/layouts/DashboardLayout/Footer';
import { WidgetCard } from '@components/WidgetCard';
import { WidgetCardCornerRadiusDirection } from '@components/WidgetCard/interfaces';
import CastIcon from '@mui/icons-material/Cast';
import { AdminPanelSettingsOutlined, FindInPage, PublicSharp } from '@mui/icons-material';

export const DashboardContainer: FC = () => {
  const classes = useStyles();

  return (
    <DashboardLayout header={<Header />} footer={<Footer />}>
      <div className={classes.root}>
        <div className={classes.actionWidgetsWrapper}>
          <div className={classes.actionWidgetsContainer}>
            <WidgetCard
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
              cornerRadiusDirection={WidgetCardCornerRadiusDirection.BottomLeft}
              title={'Join meeting'}
              subtitle={'If you have the code, click and paste it'}
              icon={FindInPage}
            />
            <WidgetCard
              cornerRadiusDirection={WidgetCardCornerRadiusDirection.BottomRight}
              title={'Choose language'}
              subtitle={'Configure the language to translate'}
              icon={PublicSharp}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
