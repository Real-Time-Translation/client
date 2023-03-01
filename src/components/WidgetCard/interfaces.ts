import { SvgIconComponent } from '@mui/icons-material';
import { ReactNode } from 'react';

export interface WidgetCardProps {
  title: string;
  subtitle?: string;
  cornerRadiusDirection?: WidgetCardCornerRadiusDirection;
  icon?: SvgIconComponent;
  isControlsShown?: boolean;
  onSubtitleClick?: () => void;
  controls?: ReactNode;
}

export enum WidgetCardCornerRadiusDirection {
  TopLeft = 'TopLeft',
  BottomLeft = 'BottomLeft',
  TopRight = 'TopRight',
  BottomRight = 'BottomRight',
}
