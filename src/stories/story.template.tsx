import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from 'styled-components';
import {
  ComponentStory,
  Meta,
  ComponentMeta,
  Args,
  ArgTypes,
  DecoratorFn,
  Parameters,
} from '@storybook/react';
import theme from '@/styled/theme.styled';

interface OptionsStory {
  args?: Args;
  argTypes?: ArgTypes;
  parameters?: Parameters;
  decorators?: DecoratorFn[];
}

export const createTemplate = <T extends {}>(
  Component: React.FC<T>
): ComponentStory<typeof Component> => args => (
  <ThemeProvider theme={theme}>
    <Component {...args} />
  </ThemeProvider>
);

export const createStory = <T extends {}>(
  title: string,
  component: React.FC<T>,
  options?: OptionsStory
): Meta<PropsWithChildren<T>> => {
  const obj = {
    title,
    component,
    ...options,
  } as ComponentMeta<typeof component>;

  return obj;
};
