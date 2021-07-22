import {Button as ButtonComponent} from '@/components/button/button.component';
import {createStory, createTemplate} from '@/stories/story.template';

export default createStory('Netflix/Components/Buttons', ButtonComponent);

export const Button = createTemplate(ButtonComponent).bind({});
Button.args = {
  children: 'Кнопка',
};

export const InvertButton = createTemplate(ButtonComponent).bind({});
InvertButton.args = {
  children: 'Кнопка',
  isLink: true,
};
