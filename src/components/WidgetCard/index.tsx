import React, { FC } from 'react';
import { WidgetCardCornerRadiusDirection, WidgetCardProps } from './interfaces';
import classNames from 'classnames';
import { Typography } from '@mui/material';
import { useStyles } from './index.styles';
import { SvgIconComponent } from '@mui/icons-material';

export const WidgetCard: FC<WidgetCardProps> = ({
  title,
  subtitle,
  icon,
  cornerRadiusDirection,
  controls,
  onSubtitleClick,
  isControlsShown,
}) => {
  const classes = useStyles();

  const TitleIcon = icon as SvgIconComponent;

  const cornerDirectionMappedToClass: Record<
    WidgetCardCornerRadiusDirection,
    string
  > = {
    [WidgetCardCornerRadiusDirection.BottomLeft]: classes.bottomLeftCorner,
    [WidgetCardCornerRadiusDirection.TopLeft]: classes.topLeftCorner,
    [WidgetCardCornerRadiusDirection.BottomRight]: classes.bottomRightCorner,
    [WidgetCardCornerRadiusDirection.TopRight]: classes.topRightCorner,
  };
  const computedCornerDirectionClass = cornerRadiusDirection
    ? cornerDirectionMappedToClass[cornerRadiusDirection]
    : '';

  return (
    <div className={classNames(classes.root, computedCornerDirectionClass)}>
      <TitleIcon className={classes.titleIcon} />
      <Typography fontWeight={600}>{title}</Typography>
      <Typography variant="subtitle2" className={classes.subtitle}>
        {isControlsShown ? (
          controls
        ) : (
          <span role="presentation" onClick={onSubtitleClick}>
            {subtitle}
          </span>
        )}
      </Typography>
    </div>
  );
};
