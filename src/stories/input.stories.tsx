import React, {ThemeProvider, ComponentMeta, ComponentStory, theme} from '@/stories';
import {Input as InputComponent} from '@/components/input/input.component';

export default {
  title: 'Netflix/Components/Input',
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = args => (
  <ThemeProvider theme={theme}>
    <InputComponent {...args} />
  </ThemeProvider>
);

export const Input = Template.bind({});
Input.args = {
  value: 'Текст',
  className: 'input_field',
  placeholder: 'Введите текст...',
  style: {
    width: '300px',
  },
};
