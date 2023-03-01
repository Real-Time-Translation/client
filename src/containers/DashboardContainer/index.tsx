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

export const DashboardContainer: FC = () => {
  const classes = useStyles();

  const { currentLanguage, onChangeLanguage } = useContext(LanguageContext);

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
            <LanguageWidget
              currentLanguage={currentLanguage}
              onChangeLanguage={onChangeLanguage}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
