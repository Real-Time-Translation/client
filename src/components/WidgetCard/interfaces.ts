import { SvgIconComponent } from '@mui/icons-material';

export interface WidgetCardProps {
  title: string;
  subtitle?: string;
  cornerRadiusDirection?: WidgetCardCornerRadiusDirection;
  icon?: SvgIconComponent;
}

export enum WidgetCardCornerRadiusDirection {
  TopLeft = 'TopLeft',
  BottomLeft = 'BottomLeft',
  TopRight = 'TopRight',
  BottomRight = 'BottomRight',
}
