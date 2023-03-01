import { SvgIconComponent } from '@mui/icons-material';
import { ReactNode } from 'react';

export interface WidgetCardProps {
  title: string;
  subtitle?: string;
  cornerRadiusDirection?: WidgetCardCornerRadiusDirection;
  icon?: SvgIconComponent;
  control?: ReactNode;
}

export enum WidgetCardCornerRadiusDirection {
  TopLeft = 'TopLeft',
  BottomLeft = 'BottomLeft',
  TopRight = 'TopRight',
  BottomRight = 'BottomRight',
}
