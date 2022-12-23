import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paper } from './index';

export default {
  title: 'Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

export const Primary: ComponentStory<typeof Paper> = () => <Paper />;
