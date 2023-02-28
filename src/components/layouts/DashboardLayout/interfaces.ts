import { ReactNode } from 'react';

export interface DashboardProps {
  /** Inner element*/
  children?: ReactNode;
  /** Header */
  header?: ReactNode;
  /** Footer */
  footer?: ReactNode;
}
