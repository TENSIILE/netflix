import React, {ThemeProvider, ComponentMeta, ComponentStory, theme} from '@/stories';
import {Button as ButtonComponent} from '@/components/button/button.component';

export default {
  title: 'Netflix/Components/Buttons',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = args => (
  <ThemeProvider theme={theme}>
    <ButtonComponent {...args} />
  </ThemeProvider>
);

export const Button = Template.bind({});
Button.args = {
  children: 'Кнопка',
};

export const InvertButton = Template.bind({});
InvertButton.args = {
  children: 'Кнопка',
  className: 'btn__link',
};
